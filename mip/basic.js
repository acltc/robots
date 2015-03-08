var Cylon = require('cylon');

Cylon.robot({
  connections: { bluetooth: {adaptor: 'central', uuid: '77cf249ef7d44b1a949eab60469c2d40', module: 'cylon-ble'}},
  devices: {mip: {driver: 'mip'}},

  work: function(my) {
    my.mip.setHeadLED(2, 2, 2, 2);
    after((2).seconds(), function() {
      my.mip.flashChestLED(1, 1, 1, 1, 1);
    });
    after((4).seconds(), function() {
      my.mip.driveDistance(0, 20, 0, 0);
    });
    after((6).seconds(), function() {
      my.mip.turnRight(180, 10);
    });
    after((10).seconds(), function() {
      my.mip.driveBackward(25, 5000);
    });
    
  }
}).start();
