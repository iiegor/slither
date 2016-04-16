message = require '../utils/message'

exports.build = (foods) ->
  buffer = new Uint8Array(3 + (6 * foods.length))

  b = 0
  b += message.writeInt8 b, buffer, 0
  b += message.writeInt8 b, buffer, 0

  ## Append message type
  b += message.writeInt8 b, buffer, 'F'.charCodeAt(0)

  ## Append food
  i = 0
  while i < foods.length
    food = foods[i]

    b += message.writeInt8 b, buffer, food.color
    b += message.writeInt16 b, buffer, food.xPos
    b += message.writeInt16 b, buffer, food.yPos
    b += message.writeInt8 b, buffer, food.color

    i++

  buffer
