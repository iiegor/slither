ws = require 'ws'
url = require 'url'

snake = require './entities/snake'

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
    close = =>
      @logger.log @logger.level.DEBUG, 'Connection closed.'

      conn.send = -> return
      
      delete @clients[conn.id]

    conn.on 'message', @handleMessage.bind(this, conn)
    conn.on 'error', close
    conn.on 'close', close

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
        @send conn.id, require('./packets/food').build(@foods)

        @logger.log @logger.level.DEBUG, "A new snake called #{conn.snake.username} was connected!"
      else if firstByte is 109
        console.log '->', secondByte
      else
        @logger.log @logger.level.ERROR, "Unhandled message #{String.fromCharCode(firstByte)}", null

  handleError: (e) ->
    @logger.log @logger.level.ERROR, e.message, e

  send: (id, data) ->
    @clients[id].send data, {binary: true}

  broadcast: (data) ->
    for client in @clients
      client.send data, {binary: true}

  close: ->
    @server.close()