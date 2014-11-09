var cylon = require('cylon');

cylon.robot({
  connection: { name: 'keyboard', adaptor: 'keyboard' },
  device: { name: 'keyboard', driver: 'keyboard' }
})

.on('ready', function(robot) {
  robot.keyboard.on('up', function(){
    console.log("UP!");
  });

  robot.keyboard.on('down', function(){
    console.log("DOWN!");
  });

  robot.keyboard.on('left', function(){
    console.log("LEFT!");
  });
  robot.keyboard.on('RIGHT', function(){
    console.log("RIGHT!");
  });
})

.start();
