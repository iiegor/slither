ws = require 'ws'
url = require 'url'

snake = require './entities/snake'
food = require './entities/food'
sector = require './entities/sector'

messages = require './messages'

logger = require './utils/logger'
message = require './utils/message'
math = require './utils/math'

module.exports =
class Server
  ###
  Section: Properties
  ###
  logger: new logger(this)
  server: null
  counter: 0
  clients: []

  foods: []
  sectors: []

  ###
  Section: Construction
  ###
  constructor: (@port) ->
    global.Server = this

  ###
  Section: Public
  ###
  bind: ->
    @server = new ws.Server {@port, path: '/slither'}, =>
      @logger.log @logger.level.INFO, "Listening for connections"

      # Generate food and sectors
      @generateFood(global.Application.config['food-amount'])
      @generateSectors()

    @server.on 'connection', @handleConnection.bind(this)
    @server.on 'error', @handleError.bind(this)

  ###
  Section: Private
  ###
  handleConnection: (conn) ->
    conn.binaryType = 'arraybuffer'

    # Limit connections
    if @clients.length >= global.Application.config['max-connections']
      conn.close()
      return

    # Check connection origin
    params = url.parse(conn.upgradeReq.url, true).query
    origin = conn.upgradeReq.headers.origin
    unless global.Application.config.origins.indexOf(origin) > -1
      conn.close()
      return

    conn.id = ++@counter

    # Push to clients
    @clients[conn.id] = conn

    # Bind socket connection methods
    close = (id) =>
      @logger.log @logger.level.DEBUG, 'Connection closed.'

      conn.send = -> return

      # This avoid the snake still moving when the client closes the socket
      # TODO: Check if this is the right behavior
      clearInterval(conn.snake.update)

      delete @clients[id]

    conn.on 'message', @handleMessage.bind(this, conn)
    conn.on 'error', close.bind(this, conn.id)
    conn.on 'close', close.bind(this, conn.id)

    @send conn.id, messages.initial

  handleMessage: (conn, data) ->
    return if data.length == 0

    if data.length >= 227
      conn.close()
      return
    else if data.length is 1
      value = message.readInt8 0, data

      if value <= 250
        console.log 'Snake going to', value

        # Check if the value is equal to the last value received
        return if value is conn.snake.direction.angle

        radians = value * (Math.PI / 125)
        speed = 1

        x = Math.cos(radians) + 1
        y = Math.sin(radians) + 1

        # Must be between 86 - 170
        conn.snake.direction.x = x * 127 * speed
        conn.snake.direction.y = y * 127 * speed

        conn.snake.direction.angle = value
      else if value is 253
        console.log 'Snake in speed mode -', value
      else if value is 254
        console.log 'Snake in normal mode -', value
      else if value is 251
        # Pong message
        @send conn.id, messages.pong
    else
      firstByte = message.readInt8 0, data
      secondByte = message.readInt8 1, data

      # Create snake
      if firstByte is 115
        # TODO: Maybe we need to check if the skin exists?
        skin = message.readInt8 2, data
        name = message.readString 3, data, data.byteLength

        # Create the snake
        conn.snake = new snake(conn.id, name, x: 28907.6 * 5, y: 21137.4 * 5, skin)
        @broadcast messages.snake.build(conn.snake)

        @logger.log @logger.level.DEBUG, "A new snake called #{conn.snake.name} was connected!"

        # Spawn current playing snakes
        @spawnSnakes(conn.id)

        # Update snake position each 2s
        # TODO: Find a proper interval time
        # TODO: Spawn nearby sectors
        conn.snake.update = setInterval(() =>
          conn.snake.body.x += Math.round(Math.cos(conn.snake.direction.angle * 1.44 * Math.PI / 180) * 170)
          conn.snake.body.y += Math.round(Math.sin(conn.snake.direction.angle * 1.44 * Math.PI / 180) * 170)

          ###
          TODO: Check if the snake is outside the circle

          @info
           R = gameRadius
           r = Math.pow((conn.snake.body.x - R), 2) + Math.pow((conn.snake.body.y - R), 2)

           messages.end.build(...) if r < R^2
          ###
          
          @broadcast messages.direction.build(conn.snake.id, conn.snake.direction)
          # TODO: The position is probably bad calculated.
          # @broadcast messages.position.build(conn.snake.id, conn.snake.body.x, conn.snake.body.y)
          @broadcast messages.movement.build(conn.snake.id, conn.snake.direction.x, conn.snake.direction.y)
        , 230)

        # Send spawned food
        # TODO: Only send the food inside the current sector
        # @send conn.id, messages.food.build(@foods)

        # Update highscore, leaderboard and minimap
        # TODO: Move this to a global tick method
        @send conn.id, messages.leaderboard.build([conn], 1, [conn])
        @send conn.id, messages.highscore.build('iiegor', 'A high score message')
        @send conn.id, messages.minimap.build(@foods)
      else
        @logger.log @logger.level.ERROR, "Unhandled message #{String.fromCharCode(firstByte)}", null

  handleError: (e) ->
    switch e.code
      when 'EADDRINUSE'
        @logger.log @logger.level.ERROR, 'The address is already in use, change the port number', e
      else
        @logger.log @logger.level.ERROR, e.message, e

  generateFood: (amount) ->
    i = 0
    while i < amount
      x = math.randomInt(0, 65535)
      y = math.randomInt(0, 65535)
      id = x * global.Application.config['game-radius'] * 3 + y
      color = math.randomInt(0, global.Application.config['food-colors'])
      size = math.randomInt(global.Application.config['food-size'][0], global.Application.config['food-size'][1])

      @foods.push(new food(id, {x, y}, size, color))

      i++

  generateSectors: ->
    sectorsAmount = global.Application.config['game-radius'] / global.Application.config['sector-size']

    i = 0
    while i < sectorsAmount
      i++

  spawnSnakes: (id) ->
    @clients.forEach (client) =>
      @send(id, messages.snake.build(client.snake)) if client.id isnt id

  spawnFoodChunks: (id, amount) ->
    for chunk in math.chunk(@foods, amount)
      @send id, messages.food.build(chunk)

  send: (id, data) ->
    @clients[id].send data, {binary: true}

  broadcast: (data) ->
    for client in @clients
      client?.send data, {binary: true}

  close: ->
    @server.close()
