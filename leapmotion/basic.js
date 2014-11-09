var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'leapmotion',
    adaptor: 'leapmotion'
  },

  device: {
    name: 'leapmotion',
    driver: 'leapmotion'
  },

  work: function(my) {
    my.leapmotion.on('hand', function(payload) {
      console.log(payload.toString());
    });
  }
}).start();