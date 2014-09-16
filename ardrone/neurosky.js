var Cylon = require('cylon');

Cylon.robot({

  connections: [
    { name: 'neurosky', adaptor: 'neurosky', port: '/dev/tty.MindWaveMobile-DevA' },
    { name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' }  
  ],
  devices: [
    { name: 'neurosky', driver: 'neurosky', connection: 'neurosky' },
    { name: 'drone', driver: 'ardrone', connection: 'ardrone' },
  ],


  work: function(my) {
    my.drone.takeoff();

    my.neurosky.on('attention', function(data) {
      console.log("attention:" + data);
      if(parseInt(data) > 30) {
        console.log("ATTENTION");
        my.drone.up(0.5);
      } else {
        console.log("CALM");
        my.drone.down(0.5);
      }
      my.drone.stop();
    });

    my.neurosky.on('meditation', function(data) {
      console.log("meditation:" + data);
    });

    after((15).seconds(), function() {
      my.drone.land();
    });

  }
}).start();