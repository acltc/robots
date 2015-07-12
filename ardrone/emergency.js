var Cylon = require('cylon');

Cylon.robot({
  connections: [{ name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' }],
  devices: [{ name: 'drone', driver: 'ardrone' }],
  
  work: function(my) {
    my.drone.disableEmergency();
    my.drone.land();  
  }
}).start();