message = require '../utils/message'

type = 'F'.charCodeAt(0)

exports.build = (foods) ->
  arr = new Uint8Array(3 + (6 * foods.length))

  b = 0
  b += message.writeInt8 b, arr, 0
  b += message.writeInt8 b, arr, 0

  ## Append message type
  b += message.writeInt8 b, arr, type

  ## Append food
  i = 0
  while i < foods.length
    food = foods[i]

    b += message.writeInt8 b, arr, food.color
    b += message.writeInt16 b, arr, food.position.x
    b += message.writeInt16 b, arr, food.position.y
    b += message.writeInt8 b, arr, food.size

    i++

  arr
