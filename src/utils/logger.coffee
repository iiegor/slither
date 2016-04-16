chalk = require 'chalk'
fs = require 'fs'

module.exports =
class Logger
  level: {
    INFO: 'INFO'
    ERROR: 'ERROR'
    DEBUG: 'DEBUG'
  }

  constructor: (caller) ->
    @caller = caller.name

  log: (level, message) ->
    return console.log "[#{@caller}] [?] #{message}" if typeof level == "undefined"

    switch level
      when @level.INFO
        console.info chalk.cyan("[#{@caller}]") + chalk.green("[#{level}] ") + "#{message}"
      when @level.ERROR
        console.error chalk.cyan("[#{@caller}]") + chalk.red("[#{level}] ") + "#{message} - ", arguments[2]
        @write """
          #{new Date()}
          ERROR: #{arguments[2]}
          MESSAGE: [#{@caller}] #{message}
          \n
          """ if global.Application.config['env'] isnt 'dev'
      when @level.DEBUG
        console.log chalk.cyan("[#{@caller}]") + chalk.gray("[#{level}] ") + "#{message}" if global.Application.config['env'] is 'dev'

  ###
  Write exceptions to a log file
  ###
  write: (exception) -> fs.appendFile global.Application.config.logfile, exception
