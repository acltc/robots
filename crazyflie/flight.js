var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'crazyflie', adaptor: 'crazyflie', port: 'radio://1/10/250KPS' },
  device: {name: 'drone', driver: 'crazyflie'},

  work: function(my) {
    my.drone.takeoff();

    after((2).seconds(), function() {
      my.drone.setPitch(10);
    });

    after((4).seconds(), function() {
      my.drone.setYaw(150)
    });

    after((5).seconds(), function() {
      my.drone.setYaw(90)
    });

    after((6).seconds(), function() {
      my.drone.setYaw(180)
    });

    after((7).seconds(), function() {
      console.log("LANDING!");
      my.drone.land();
    });

  }
}).start();
