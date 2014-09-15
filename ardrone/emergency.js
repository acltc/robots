var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' },
  device: { name: 'drone', driver: 'ardrone' },

  work: function(my) {
    my.drone.disableEmergency();
    my.drone.land();  
  }
}).start();