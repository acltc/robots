var Cylon = require('cylon');

Cylon.robot({
  connections: [{ name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' }],
  devices: [{ name: 'drone', driver: 'ardrone' }],

  work: function(my) {
    my.drone.takeoff();
    after((4).seconds(), function() { 
      my.drone.right(0.1);
    });
    after((7).seconds(), function() { 
      my.drone.left(0.1);
    });
    after((10).seconds(), function() {
      my.drone.stop();
    });
    after((13).seconds(), function() {
      my.drone.land();
    });
    after((17).seconds(), function() {
      my.drone.stop();
    });    
  }
}).start();