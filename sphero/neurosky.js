var Cylon = require('cylon');

Cylon.robot({

  connections: [
    { name: 'neurosky', adaptor: 'neurosky', port: '/dev/tty.MindWaveMobile-DevA' },
    { name: 'sphero', adaptor: 'sphero', port: '/dev/tty.Sphero-BBP-AMP-SPP' } // change this port to whatever your settings are
  ],
  devices: [
    { name: 'neurosky', driver: 'neurosky', connection: 'neurosky' },
    { name: 'sphero', driver: 'sphero', connection: 'sphero' }
  ],


  work: function(my) {
    my.neurosky.on('attention', function(data) {
      console.log("attention:" + data);
      if(parseInt(data) > 60) {
        console.log("ATTENTION");
        my.sphero.roll(150, 180);
        setTimeout(function() {
      	  my.sphero.stop();
      	  // my.sphero.roll(150, 0);
      	}, 2000);
      } else {
        console.log("CALM");
      }
      
      
    });

    my.neurosky.on('meditation', function(data) {
      console.log("meditation:" + data);
    });

  }
}).start();