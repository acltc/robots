// This basic NeuroSky example prints to the terminal your level of attention of meditation.

var Cylon = require('cylon');

Cylon.robot({
  connections: [{name: 'neurosky', adaptor: 'neurosky', port: '/dev/tty.MindWaveMobile-DevA'}],

  devices: [{name: 'headset', driver: 'neurosky'}],

  work: function(my) {
    my.headset.on('attention', function(data) {
      console.log("attention:" + data);
    });

    my.headset.on('meditation', function(data) {
      console.log("meditation:" + data);
    });
  }
});

Cylon.start();
