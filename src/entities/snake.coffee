math = require '../utils/math'

module.exports =
class Snake
  ###
  Section: Construction
  ###
  constructor: (@id, @username, @skin) ->
    @speed = 5.76 * 1e3

    pos = math.randomSpawnPoint()

    @body =
      x: pos.x
      y: pos.y

    @head = @body

    @D = 3.1415926535 / Math.PI * 16777215
    @X = @D

    @J = 306
    @I = 0.7810754645511785 * 16777215

    @parts = [
      {
        x: 138
        y: 43
      }
    ]