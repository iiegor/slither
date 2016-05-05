math = require '../utils/math'

module.exports =
class Snake
  ###
  Section: Construction
  ###
  constructor: (@id, @name, @body, @skin) ->
    @speed = 5.79 * 1e3

    @head = @body

    @D = 5.69941607541398 / 2 / Math.PI * 16777215
    @X = @D

    @length = 10

    @J = 306
    @I = 0.7810754645511785 * 16777215

    @direction =
      x: 0.1
      y: 0.1
      angle: 0

    @parts = []

    # Development code
    # Append some parts to the snake
    i = 0
    while i < 20
      @parts.push({x: i + 1, y: i + 2})

      i += 2
