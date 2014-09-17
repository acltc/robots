var Cylon = require('cylon');

Cylon.robot({
  connections: [
    { name: 'sphero', adaptor: 'sphero', port: '/dev/tty.Sphero-BBP-AMP-SPP' }, // change this port to whatever your settings are
    { name: 'keyboard', adaptor: 'keyboard' }
    ],
  devices: [
    { name: 'sphero', driver: 'sphero', connection: 'sphero'},
    { name: 'keyboard', driver: 'keyboard', connection: 'keyboard'}
  ],

  work: function(my) {
    my.keyboard.on('right', function(key) { 
      console.log("RIGHT PRESSED!");
      my.sphero.setRandomColor();
      my.sphero.roll(150, 90);
    });

    my.keyboard.on('up', function(key) { 
      console.log("UP PRESSED!");
      my.sphero.setRandomColor();
      my.sphero.roll(150, 0);
    });

    my.keyboard.on('down', function(key) { 
      console.log("DOWN PRESSED!");
      my.sphero.setRandomColor();
      my.sphero.roll(150, 180);
    });

    my.keyboard.on('left', function(key) { 
      console.log("LEFT PRESSED!");
      my.sphero.setRandomColor();
      my.sphero.roll(150, 270);
    });

    my.keyboard.on('space', function(key) { 
      console.log("SPACE PRESSED!");
      my.sphero.setRandomColor();
      my.sphero.stop();
    });

    my.keyboard.on('c', function(key) { 
      console.log("CALIBRATE!");
      my.sphero.startCalibration();
    });

    my.keyboard.on('f', function(key) { 
      console.log("FINISH CALIBRATION!");
      my.sphero.finishCalibration();
    });

  }
}).start();