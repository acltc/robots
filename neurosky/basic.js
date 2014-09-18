// This basic NeuroSky example prints to the terminal your level of attention of meditation.

var Cylon = require('cylon');

Cylon.robot({
  connection: {name: 'neurosky', adaptor: 'neurosky', port: '/dev/tty.MindWaveMobile-DevA'},

  device: {name: 'headset', driver: 'neurosky'},

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
