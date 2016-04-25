message = require '../utils/message'

type = 'e'.charCodeAt(0)

exports.build = (id, direction) ->
  arr = new Uint8Array(8)
  
  b = 0
  b += message.writeInt8 b, arr, 0
  b += message.writeInt8 b, arr, 0

  ## Append message type
  b += message.writeInt8 b, arr, type

  ## Append id
  b += message.writeInt16 b, arr, id

  ## Append position values
  b += message.writeInt8 b, arr, direction
  b += message.writeInt8 b, arr, 71
  b += message.writeInt8 b, arr, 104

  arr
