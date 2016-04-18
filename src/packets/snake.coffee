message = require '../utils/message'

exports.build = (snake) ->
  usernameLength = snake.username.length
  partsLength = snake.parts.length * 2

  buffer = new Uint8Array(27 + usernameLength + 6 + partsLength)
  b = 0

  b += message.writeInt8 b, buffer, 0
  b += message.writeInt8 b, buffer, 0

  b += message.writeInt8 b, buffer, 's'.charCodeAt(0)
  b += message.writeInt16 b, buffer, snake.id
  b += message.writeInt24 b, buffer, snake.D

  b += message.writeInt8 b, buffer, 0

  b += message.writeInt24 b, buffer, snake.X
  b += message.writeInt16 b, buffer, snake.speed
  b += message.writeInt24 b, buffer, snake.H
  b += message.writeInt8 b, buffer, snake.skin
  b += message.writeInt24 b, buffer, snake.body.x
  b += message.writeInt24 b, buffer, snake.body.y

  b += message.writeInt8 b, buffer, usernameLength

  message.writeString b, buffer, snake.username

  index = b + usernameLength
  message.writeInt24 index, buffer, snake.head.x
  message.writeInt24 index + 3, buffer, snake.head.y
  index += 6

  i = 0
  while i < snake.parts.length
    message.writeInt8 index, buffer, snake.parts[i].x
    message.writeInt8 index + 1, buffer, snake.parts[i].y

    index += 2

    i++

  buffer
