var Cylon = require('cylon');

Cylon.robot({
  connections: [{ name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' }],
  devices: [{ name: 'drone', driver: 'ardrone' }],

  work: function(my) {
    my.drone.takeoff();

    after((5).seconds(), function() {
      my.drone.land();
    });

    after((10).seconds(), function() {
      my.drone.stop();
    });
  }
}).start();