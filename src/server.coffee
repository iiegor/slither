ws = require 'ws'
url = require 'url'

snake = require './entities/snake'

logger = require './utils/logger'
misc = require './utils/misc'

module.exports =
class Server
  ###
  Section: Properties
  ###
  logger: new logger(this)
  server: null
  clients: []

  counter: 0

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

    # Bind socket connection methods
    close = =>
      @logger.log @logger.level.DEBUG, 'Connection closed.'

      conn.send = -> return
      
      delete @clients[conn.id]

    conn.on 'message', @handleMessage.bind(this, conn)
    conn.on 'error', close
    conn.on 'close', close

    # Add the client
    @clients.push conn

    @send conn, require('./packets/map').buffer

  handleMessage: (conn, message) ->
    return if message.length == 0

    buffer = misc.stobuf message
    view = new DataView buffer

    packetId = String.fromCharCode view.getUint8(0, true)

    # Ping / pong
    if packetId is 'p'
      @send conn, require('./packets/pong').buffer
    # Create snake
    else if packetId is 's'
      i = 3
      username = ''
      while i < view.byteLength
        username += String.fromCharCode view.getUint8(i, true)

        i++

      connSnake = new snake(conn.id, username, misc.randomInt(0, 26))
      @send conn, require('./packets/snake').build connSnake

      @logger.log @logger.level.DEBUG, "A new snake called #{connSnake.username} was connected!"

      @send conn, new Uint8Array([0, 24, 119, 2, 0, 69, 0, 46])
    # Handle unknown messages
    else
      @logger.log @logger.level.ERROR, "Unhandled packet #{packetId}", null

  handleError: (e) ->
    @logger.log @logger.level.ERROR, e.message, e

  send: (conn, data) ->
    conn.send data, {binary: true}

  broadcast: (msg) ->
    for client in @clients
      client.send JSON.stringify(msg)

  close: ->
    @server.close()