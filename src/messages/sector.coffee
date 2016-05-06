message = require '../utils/message'

type = 'W'.charCodeAt(0)

exports.build = (x, y) ->
  arr = new Uint8Array(8)
  b = 0

  b += message.writeInt8 b, arr, 0
  b += message.writeInt8 b, arr, 0

  b += message.writeInt8 b, arr, type

  # Append sector location
  b += message.writeInt8 b, arr, x
  b += message.writeInt8 b, arr, y

  arr
