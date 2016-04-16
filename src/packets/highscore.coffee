message = require '../utils/message'

exports.build = (text, text2) ->
  buffer = new Uint8Array(10 + text.length + text2.length)

  b = 0
  b += message.writeInt8 b, buffer, 0
  b += message.writeInt8 b, buffer, 0

  ## Append message type
  b += message.writeInt8 b, buffer, 'm'.charCodeAt(0)

  b += message.writeInt24 b, buffer, 462
  b += message.writeInt24 b, buffer, 0.580671702663404 * 16777215

  b += message.writeInt8 b, buffer, text.length
  b += message.writeString b, buffer, text
  b += message.writeString b, buffer, text2

  buffer
