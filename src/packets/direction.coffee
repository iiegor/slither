message = require '../utils/message'

type = 'e'.charCodeAt(0)

exports.build = (snake) ->
  arr = new Uint8Array(8)
  
  b = 0
  b += message.writeInt8 b, arr, 0
  b += message.writeInt8 b, arr, 0

  ## Append message type
  b += message.writeInt8 b, arr, type

  ## Append id
  b += message.writeInt16 b, arr, snake.id

  ## Append position values
  b += message.writeInt8 b, arr, snake.direction.angle / 1.411764705882353
  b += message.writeInt8 b, arr, 71
  b += message.writeInt8 b, arr, 104

  arr
