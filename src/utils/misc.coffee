exports.stobuf = (str) ->
  length = str.length
  arrayBuf = new ArrayBuffer(length)
  view = new Uint8Array(arrayBuf)

  i = 0
  while i < length
    view[i] = str[i]
    i++

  view.buffer

exports.randomInt = (min, max) ->
  Math.floor(Math.random() * (max - min + 1)) + min

exports.randomSpawnPoint = ->
  x: exports.randomInt(5000 * 5, 30000 * 5)
  y: exports.randomInt(5000 * 5, 30000 * 5)