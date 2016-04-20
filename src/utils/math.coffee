exports.randomInt = (min, max) ->
  Math.floor(Math.random() * (max - min + 1)) + min

exports.randomSpawnPoint = ->
  x: exports.randomInt(5000 * 5, 30000 * 5)
  y: exports.randomInt(5000 * 5, 30000 * 5)
