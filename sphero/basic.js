var Cylon = require('cylon');

Cylon.robot({
  connections: [{ name: 'sphero', adaptor: 'sphero', port: '/dev/tty.Sphero-WWB-AMP-SPP' }], // change this port to whatever your settings are
  devices: [{ name: 'sphero', driver: 'sphero' }],

  work: function(my) {
    every((1).second(), function() {
      my.sphero.roll(60, Math.floor(Math.random() * 360));
    });
  }
}).start();