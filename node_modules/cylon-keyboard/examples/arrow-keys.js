var cylon = require('cylon');

cylon.robot({
  connection: { name: 'keyboard', adaptor: 'keyboard' },

  device: { name: 'keyboard', driver: 'keyboard' },

  work: function(my) {
    my.keyboard.on('up', function(){
      console.log("UP!");
    });

    my.keyboard.on('down', function(){
      console.log("DOWN!");
    });

    my.keyboard.on('left', function(){
      console.log("LEFT!");
    });
    my.keyboard.on('RIGHT', function(){
      console.log("RIGHT!");
    });
  }
}).start();
