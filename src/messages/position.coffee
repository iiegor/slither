message = require '../utils/message'

type = 'g'.charCodeAt(0)

exports.build = (id, x, y) ->
  arr = new Uint8Array(9)

  b = 0
  b += message.writeInt8 b, arr, 0
  b += message.writeInt8 b, arr, 0

  ## Append message type
  b += message.writeInt8 b, arr, type

  ## Append id
  b += message.writeInt16 b, arr, id

  ## Append position values
  b += message.writeInt16 b, arr, x
  b += message.writeInt16 b, arr, y

  arr
