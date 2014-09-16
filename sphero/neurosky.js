var Cylon = require('cylon');

Cylon.robot({

  connections: [
    { name: 'neurosky', adaptor: 'neurosky', port: '/dev/tty.MindWaveMobile-DevA' },
    { name: 'sphero', adaptor: 'sphero', port: '/dev/tty.Sphero-WWB-AMP-SPP' }
  ],
  devices: [
    { name: 'neurosky', driver: 'neurosky', connection: 'neurosky' },
    { name: 'sphero', driver: 'sphero', connection: 'sphero' }
  ],


  work: function(my) {
    my.neurosky.on('attention', function(data) {
      console.log("attention:" + data);
      if(parseInt(data) > 30) {
        console.log("ATTENTION");
        my.sphero.roll(150, 180);
      } else {
        console.log("CALM");
        my.sphero.roll(150, 0);
      }
    });

    my.neurosky.on('meditation', function(data) {
      console.log("meditation:" + data);
    });

  }
}).start();