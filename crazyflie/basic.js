var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'crazyflie', adaptor: 'crazyflie', port: 'radio://1/10/250KPS' },
  device: {name: 'drone', driver: 'crazyflie'},

  work: function(my) {
    my.drone.takeoff();

    after((1).seconds(), function() {
      console.log("HOVERING!");
      my.drone.hover();
      // my.drone.setParam('flightmode.althold', true);
    });

    after((2).seconds(), function() {
      console.log("LANDING!");
      my.drone.land();
    });

  }
}).start();
