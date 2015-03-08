"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    keyboard: { adaptor: "keyboard" }
  },

  devices: {
    keyboard: { driver: "keyboard" }
  },

  work: function(my) {
    my.keyboard.on("up", function(){
      console.log("UP!");
    });

    my.keyboard.on("down", function(){
      console.log("DOWN!");
    });

    my.keyboard.on("left", function(){
      console.log("LEFT!");
    });
    my.keyboard.on("RIGHT", function(){
      console.log("RIGHT!");
    });
  }
}).start();
