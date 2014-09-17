var Cylon = require('cylon');

Cylon.robot({

  connections: [
    { name: 'neurosky', adaptor: 'neurosky', port: '/dev/tty.MindWaveMobile-DevA' }, // control the altitude of the drone
    { name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' } ,
    { name: 'keyboard', adaptor: 'keyboard' } // for the sake of controlling the drone directionally and landing
  ],
  devices: [
    { name: 'neurosky', driver: 'neurosky', connection: 'neurosky' },
    { name: 'drone', driver: 'ardrone', connection: 'ardrone' },
    { name: 'keyboard', driver: 'keyboard', connection: 'keyboard'}
  ],


  work: function(my) {
    my.drone.takeoff();

    my.keyboard.on('space', function(key) { 
      my.drone.stop();
    });

    my.keyboard.on('l', function(key) { 
      my.drone.land();
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

    my.neurosky.on('attention', function(data) {
      console.log("attention:" + data);
      if(parseInt(data) > 60) { // feel free to change this threshold
        console.log("ATTENTION");
        my.drone.up(0.5);
        setTimeout(function() {
      	  my.drone.stop();
      	}, 500);
      } else {
        console.log("CALM");
        my.drone.down(0.5);
        setTimeout(function() {
      	  my.drone.stop();
      	}, 100);
      }
    });

    my.neurosky.on('meditation', function(data) {
      console.log("meditation:" + data);
    });

    // OPTIONAL:
    // after((15).seconds(), function() {
    //   my.drone.land();
    // });

  }
}).start();