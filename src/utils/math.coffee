exports.randomInt = (min, max) ->
  Math.floor(Math.random() * (max - min + 1)) + min

exports.randomSpawnPoint = ->
  x: exports.randomInt(5000 * 5, 30000 * 5)
  y: exports.randomInt(5000 * 5, 30000 * 5)

exports.chunk = (arr, chunkSize) ->
  R = []

  i = 0
  while i < arr.length
    R.push arr.slice(i, i + chunkSize)

    i += chunkSize

  R
