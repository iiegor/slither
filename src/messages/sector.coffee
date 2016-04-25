message = require '../utils/message'

type = 'w'.charCodeAt(0)

exports.build = ->
  arr = new Uint8Array(8)
  b = 0

  b += message.writeInt8 b, arr, 0
  b += message.writeInt8 b, arr, 0

  b += message.writeInt8 b, arr, type
  b += message.writeInt8 b, arr, 2 # unknown

  b += message.writeInt16 b, arr, 107 # unkown
  b += message.writeInt16 b, arr, 38 # unkown

  arr