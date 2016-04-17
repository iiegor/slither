message = require '../utils/message'

exports.build = (id, x, y) ->
  buffer = new Uint8Array(11)

  b = 0
  b += message.writeInt8 b, buffer, 0
  b += message.writeInt8 b, buffer, 0

  ## Append message type
  b += message.writeInt8 b, buffer, 'e'.charCodeAt(0)

  ## Append id
  b += message.writeInt16 b, buffer, id

  ## Append position values
  b += message.writeInt8 b, buffer, 82
  b += message.writeInt8 b, buffer, 71
  b += message.writeInt8 b, buffer, 104

  buffer
