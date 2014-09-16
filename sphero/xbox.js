var Cylon = require('cylon');

Cylon.robot({
  connections: [
     { name: 'sphero', adaptor: 'sphero', port: '/dev/tty.Sphero-BBP-AMP-SPP' },
     { name: 'joystick', adaptor: 'joystick' }
    ],
  devices: [
    { name: 'sphero', driver: 'sphero', connection: 'sphero'},
    { name: 'controller', driver: 'xbox-360', connection: 'joystick'}
  ],

  work: function(my) {

    my.controller.on("b:press", function() {
      console.log("CHANGE COLOR!");
      my.sphero.setRandomColor();
    });

    my.controller.on("x:press", function() {
      console.log("STOP!");
      my.sphero.setRandomColor();
      my.sphero.stop();
    });

    my.controller.on("left:press", function() {
      console.log("LEFT!");
      my.sphero.setRandomColor();
      my.sphero.roll(150, 270);
    });

    my.controller.on("right:press", function() {
      console.log("RIGHT!");
      my.sphero.setRandomColor();
      my.sphero.roll(150, 90);
    });

    my.controller.on("up:press", function() {
      console.log("UP!");
      my.sphero.setRandomColor();
      my.sphero.roll(150, 0);
    });

    my.controller.on("down:press", function() {
      console.log("DOWN!");
      my.sphero.setRandomColor();
      my.sphero.roll(150, 180);
    });

  }
}).start();