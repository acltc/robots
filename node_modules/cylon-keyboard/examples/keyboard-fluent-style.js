var cylon = require('cylon');

cylon.robot({
  connection: { name: 'keyboard', adaptor: 'keyboard' },
  device: { name: 'keyboard', driver: 'keyboard' }
})

.on('ready', function(robot) {
  robot.keyboard.on('a', function(key) {
    console.log(key.name + " a pressed!");
  });

  robot.keyboard.on('keypress',function(key) {
    console.log(key.name + " key press!");
  });

  robot.keyboard.on('keydown', function(key) {
    console.log(key.name + " keydown!");
  });

  robot.keyboard.on('keyup', function(key) {
    console.log(key.name + " keyup!");
  });
})

.start();
