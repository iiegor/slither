ws = require "ws"
url = require "url"

logger = require "./utils/logger"
misc = require "./utils/misc"

module.exports =
class Server
  ###
  Section: Properties
  ###
  logger: new logger(this)
  server: null
  clients: []

  lastMessageTime: new Date

  ###
  Section: Construction
  ###
  constructor: (@port) ->
    global.Server = this

  ###
  Section: Public
  ###
  bind: ->
    @server = new ws.Server {@port}, =>
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
      console.log origin
      return

    conn.remoteAddress = conn._socket.remoteAddress

    # Bind socket connection methods
    close = =>
      @logger.log @logger.level.DEBUG, 'Connection closed.'

      conn.send = -> return
      # @clients = @clients.filter (client) -> conn.user.id isnt client.user.id

      # Broadcast disconnection ...

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
      @send conn, require('./packets/pong').build()
    # Create snake
    else if packetId is 's'
      i = 3
      nick = ''
      while i < view.byteLength
        nick += String.fromCharCode view.getUint8(i, true)

        i++

      @send conn, require('./packets/snake').build(nick)
    # Handle unknown messages
    else
      @logger.log @logger.level.ERROR, "Unhandled packet #{packetId}", null

    if packetId isnt 'p'
      @lastMessageTime = new Date

    ###
    message = message.toString 'utf8'

    @logger.log @logger.level.DEBUG, "Message received: #{message}"

    # Create snake
    if message.startsWith 's'
      nickname = message.substr 3

      console.log 'Trying to create a snake called', nickname
    # Ping / pong
    else if message is 'p'
      @send conn, require('./packets/pong').build()

    # Update last message time from client
    if message isnt 'p'
      @lastMessageTime = new Date
    ###

  handleError: (e) ->
    @logger.log @logger.level.ERROR, e.message, e

  getElapsedTime: ->
    time = Math.floor((new Date - @lastMessageTime) / 1000)

  send: (conn, data) ->
    conn.send data, {binary: true}

  broadcast: (msg) ->
    for client in @clients
      client.send JSON.stringify(msg)

  close: ->
    @server.close()