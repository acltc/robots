var Cylon = require('cylon');

Cylon.robot({
  connections: [
     { name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' },
     { name: 'keyboard', adaptor: 'keyboard' }
    ],
  devices: [
    {name: 'drone', driver: 'ardrone', connection: 'ardrone'},
    {name: 'keyboard', driver: 'keyboard', connection:'keyboard'}
  ],

  work: function(my) {

    my.keyboard.on('t', function(key) { 
      my.drone.takeoff();
    });

    my.keyboard.on('space', function(key) { 
      my.drone.stop();
    });

    my.keyboard.on('l', function(key) { 
      my.drone.land();
    });

    my.keyboard.on('c', function(key) { 
      my.drone.calibrate(1);
    });

    my.keyboard.on('u', function(key) { 
      my.drone.up(0.5);
    });

    my.keyboard.on('d', function(key) { 
      my.drone.down(0.5);
    });

    my.keyboard.on('w', function(key) { 
        my.drone.wave();
    });

    my.keyboard.on('f', function(key) { 
      my.drone.frontFlip();
    });

    my.keyboard.on('b', function(key) { 
      my.drone.backFlip();
    });

    my.keyboard.on('r', function(key) { 
      my.drone.rightFlip();
    });

    my.keyboard.on('l', function(key) { 
      my.drone.leftFlip();
    });

    my.keyboard.on('right', function(key) {
      my.drone.right(0.1);
    });

    my.keyboard.on('left', function(key) { 
      my.drone.left(0.1);
    });

    my.keyboard.on('up', function(key) { 
      my.drone.front(0.1);
    });

    my.keyboard.on('down', function(key) { 
      my.drone.back(0.1);
    });
  
  }
}).start();