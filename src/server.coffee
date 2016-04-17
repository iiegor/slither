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
        @send conn.id, require('./packets/highscore').build('iiegor', 'test message')

        #@send conn.id, require('./packets/food').build(@foods)

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
        client.snake.xPos += 1
        client.snake.yPos += 1

        @broadcast require('./packets/direction').build(client.id, client.snake.xPos, client.snake.yPos)
      ###

      @tick = 0

  spawnFood: (amount) ->
    i = 0
    while i < amount
      position = math.randomSpawnPoint()

      @foods.push(new food(i, position.x, position.y, 1, 1))

      i++

  send: (id, data) ->
    @clients[id].send data, {binary: true}

  broadcast: (data) ->
    for client in @clients
      client?.send data, {binary: true}

  close: ->
    @server.close()