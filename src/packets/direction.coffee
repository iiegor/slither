message = require '../utils/message'

exports.build = (id, x, y) ->
  buffer = new Uint8Array(11)

  b = 0
  b += message.writeInt8 b, buffer, 0
  b += message.writeInt8 b, buffer, 0

  ## Append message type
  b += message.writeInt8 b, buffer, 'g'.charCodeAt(0)

  ## Append id
  b += message.writeInt16 b, buffer, id

  ## Append position values
  b += message.writeInt24 b, buffer, x
  b += message.writeInt24 b, buffer, y

  buffer
