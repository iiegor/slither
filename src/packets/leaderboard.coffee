message = require '../utils/message'
math = require '../utils/math'

exports.build = (rank, players, top) ->
  length = 0
  for snake in top
    length += snake.username.length

  buffer = new Uint8Array((8 + length) + (top.length * 7))

  b = 0
  b += message.writeInt8 b, buffer, 0
  b += message.writeInt8 b, buffer, 0

  ## Append message type
  b += message.writeInt8 b, buffer, 'l'.charCodeAt(0)

  b += message.writeInt8 b, buffer, 0
  b += message.writeInt16 b, buffer, rank
  b += message.writeInt16 b, buffer, players

  i = 0
  while i < top.length
    b += message.writeInt16 b, buffer, top[i].J
    b += message.writeInt24 b, buffer, top[i].I

    b += message.writeInt8 b, buffer, math.randomInt(0, 8)
    b += message.writeInt8 b, buffer, top[i].username.length

    b += message.writeString b, buffer, top[i].username

    i++

  buffer
