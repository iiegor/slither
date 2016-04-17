ws = require 'ws'
url = require 'url'

snake = require './entities/snake'
food = require './entities/food'

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
  time: new Date
  tick: 0

  foods: []

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
      @logger.log @logger.level.INFO, "Listening on port #{@port}"

      @spawnFood(global.Application.config['start-food'])

      setInterval(@ticker.bind(this), 1)

    @server.on 'connection', @handleConnection.bind(this)
    @server.on 'error', @handleError.bind(this)

  ###
  Section: Private
  ###
  handleConnection: (conn) ->
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

    conn.id = @counter++
    conn.remoteAddress = conn._socket.remoteAddress

    # Push to clients
    @clients[conn.id] = conn

    # Bind socket connection methods
    close = (id) =>
      @logger.log @logger.level.DEBUG, 'Connection closed.'

      conn.send = -> return

      delete @clients[id]

    conn.on 'message', @handleMessage.bind(this, conn)
    conn.on 'error', close.bind(this, conn.id)
    conn.on 'close', close.bind(this, conn.id)

    @send conn.id, require('./packets/map').buffer

  handleMessage: (conn, data) ->
    return if data.length == 0

    data = new Uint8Array data

    if data.byteLength is 1
      value = message.readInt8 0, data

      # Ping / pong
      if value is 250
        console.log 'Snake going to', value
      else if value is 253
        console.log 'Snake in speed mode -', value
      else if value is 254
        console.log 'Snake in normal mode -', value
      else if value is 251
        @send conn.id, require('./packets/pong').buffer

      @send conn.id, require('./packets/direction').build(conn.snake.id)
    else
      ###
      firstByte:
        115 - 's'
      ###
      firstByte = message.readInt8 0, data
      secondByte = message.readInt8 1, data

      type = message.readInt8 2, data

      # Create snake
      if firstByte is 115 and secondByte is 5
        username = message.readString 3, data, data.byteLength

        conn.snake = new snake(conn.id, username, math.randomInt(0, 26))

        @broadcast require('./packets/snake').build(conn.snake)
        
        @send conn.id, require('./packets/food').build(@foods)
        # @send conn.id, require('./packets/highscore').build('iiegor', 'test message')

        @logger.log @logger.level.DEBUG, "A new snake called #{conn.snake.username} was connected!"
      else if firstByte is 109
        console.log '->', secondByte
      else
        @logger.log @logger.level.ERROR, "Unhandled message #{String.fromCharCode(firstByte)}", null

  handleError: (e) ->
    @logger.log @logger.level.ERROR, e.message, e

  ticker: ->
    local = new Date

    @tick += (local - @time)
    @time = local

    if @tick >= 50
      # Leaderboard packet is sended here

      # Test
      ###
      for client in @clients
        client.snake.body.x += 1
        client.snake.body.y += 1

        @broadcast require('./packets/direction').build(client.id, client.snake.body.x, client.snake.body.y)
      ###

      @tick = 0

  spawnFood: (amount) ->
    i = 0
    while i < amount
      xPos = math.randomInt(0, 65535)
      yPos = math.randomInt(0, 65535)
      id = xPos * global.Application.config['map-size'] * 3 + yPos
      color = math.randomInt(0, global.Application.config['food-colors'])
      size = math.randomInt(global.Application.config['food-size'][0], global.Application.config['food-size'][1])

      @foods.push(new food(id, xPos, yPos, size, color))

      i++

  send: (id, data) ->
    @clients[id].send data, {binary: true}

  broadcast: (data) ->
    for client in @clients
      client?.send data, {binary: true}

  close: ->
    @server.close()