var Cylon = require('cylon');

Cylon.robot({
  connections: [
     { name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' },
     { name: 'joystick', adaptor: 'joystick' }
    ],
  devices: [
    {name: 'drone', driver: 'ardrone', connection: 'ardrone'},
    { name: 'controller', driver: 'xbox-360', connection: 'joystick'}
  ],

  work: function(my) {

    my.controller.on("home:press", function() {
      console.log("TAKEOFF!");
      my.drone.takeoff();
    });

    my.controller.on("y:press", function() {
      console.log("UP!");
      my.drone.up(0.5);
    });

    my.controller.on("a:press", function() {
      console.log("DOWN!");
      my.drone.down(0.5);
    });

    my.controller.on("b:press", function() {
      console.log("STOP!");
      my.drone.stop();
    });

    my.controller.on("x:press", function() {
      console.log("LAND!");
      my.drone.land();
    });

    my.controller.on("left:press", function() {
      console.log("LEFT!");
      my.drone.left(0.1);
    });

    my.controller.on("right:press", function() {
      console.log("RIGHT!");
      my.drone.right(0.1);
    });

    my.controller.on("up:press", function() {
      console.log("FRONT!");
      my.drone.front(0.1);
    });

    my.controller.on("down:press", function() {
      console.log("BACK!");
      my.drone.back(0.1);
    });

    my.controller.on("right_stick:press", function() {
      console.log("BACKFLIP!");
      my.drone.backFlip();
    });

    my.controller.on("start:press", function() {
      console.log("CALIBRATE!");
      my.drone.calibrate(1);
    });

    my.controller.on("select:press", function() {
      console.log("WAVE!");
      my.drone.wave();
    });

    my.controller.on("rb:press", function() {
      console.log("CLOCKWISE!");
      my.drone.clockwise(1);
    });

    my.controller.on("lb:press", function() {
      console.log("COUNTER-CLOCKWISE!");
      my.drone.counterClockwise(1);
    });

    // my.keyboard.on('left', function(key) { 
    //   my.drone.left(0.1);
    // });

    // my.keyboard.on('up', function(key) { 
    //   my.drone.front(0.1);
    // });

    // my.keyboard.on('down', function(key) { 
    //   my.drone.back(0.1);
    // });



    // my.keyboard.on('u', function(key) { 
    //   my.drone.up(0.5);
    // });

    // my.keyboard.on('d', function(key) { 
    //   my.drone.down(0.5);
    // });

    // my.keyboard.on('w', function(key) { 
    //     my.drone.wave();
    // });

    // my.keyboard.on('f', function(key) { 
    //   my.drone.frontFlip();
    // });

    
  
  }
}).start();