var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/tty.Sphero-BBP-AMP-SPP' }, // change this port to whatever your settings are
  device: { name: 'sphero', driver: 'sphero' },

  work: function(my) {
    every((1).second(), function() {
      my.sphero.roll(60, Math.floor(Math.random() * 360));
    });
  }
}).start();