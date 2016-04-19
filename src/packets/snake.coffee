message = require '../utils/message'

type = 's'.charCodeAt(0)

exports.build = (snake) ->
  usernameLength = snake.username.length
  partsLength = snake.parts.length * 2

  arr = new Uint8Array(27 + usernameLength + 6 + partsLength)
  b = 0

  b += message.writeInt8 b, arr, 0
  b += message.writeInt8 b, arr, 0

  b += message.writeInt8 b, arr, type
  b += message.writeInt16 b, arr, snake.id
  b += message.writeInt24 b, arr, snake.D

  b += message.writeInt8 b, arr, 0

  b += message.writeInt24 b, arr, snake.X
  b += message.writeInt16 b, arr, snake.speed
  b += message.writeInt24 b, arr, 0.028860630325116536 * 16777215
  b += message.writeInt8 b, arr, snake.skin
  b += message.writeInt24 b, arr, snake.body.x
  b += message.writeInt24 b, arr, snake.body.y

  b += message.writeInt8 b, arr, usernameLength

  message.writeString b, arr, snake.username

  index = b + usernameLength
  message.writeInt24 index, arr, snake.head.x
  message.writeInt24 index + 3, arr, snake.head.y
  index += 6

  i = 0
  while i < snake.parts.length
    message.writeInt8 index, arr, snake.parts[i].x
    message.writeInt8 index + 1, arr, snake.parts[i].y

    index += 2

    i++

  arr
