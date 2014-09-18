var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'keyboard', adaptor: 'keyboard' },
  device: { name: 'keyboard', driver: 'keyboard' },

  work: function(my) {
    my.keyboard.on('a', function(key) {
      console.log("a pressed");
    });

    my.keyboard.on('b', function(key) {
      console.log("b pressed");
    });

    my.keyboard.on('left', function(key) {
      console.log("left pressed");
    });

    my.keyboard.on('right', function(key) {
      console.log("right pressed");
    });

    my.keyboard.on('up', function(key) {
      console.log("up pressed");
    });

    my.keyboard.on('down', function(key) {
      console.log("down pressed");
    });
  }
}).start();