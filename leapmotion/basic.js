var Cylon = require('cylon');

Cylon.robot({
  connections: [{
    name: 'leapmotion',
    adaptor: 'leapmotion'
  }],

  devices: [{
    name: 'leapmotion',
    driver: 'leapmotion'
  }],

  work: function(my) {
    my.leapmotion.on('hand', function(payload) {
      console.log(payload.toString());
    });
  }
}).start();