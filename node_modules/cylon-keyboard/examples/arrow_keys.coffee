Cylon = require 'cylon'

Cylon.robot
  connection: { name: 'keyboard', adaptor: 'keyboard' }
  device: { name: 'keyboard', driver: 'keyboard' }
  work: (my) ->
    my.keyboard.on 'up', (key) ->
      console.log "UP!"

    my.keyboard.on 'down', (key) ->
      console.log "DOWN!"

    my.keyboard.on 'left', (key) ->
      console.log "LEFT!"

    my.keyboard.on 'right', (key) ->
      console.log "RIGHT!"
.start()
