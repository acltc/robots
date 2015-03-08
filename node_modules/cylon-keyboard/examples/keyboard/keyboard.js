"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    keyboard: { adaptor: "keyboard" }
  },

  devices: {
    keyboard: { name: "keyboard", driver: "keyboard" }
  },

  work: function(my) {
    my.keyboard.on("a", function(key) {
      console.log(key.name + " a pressed!");
    });

    my.keyboard.on("keypress",function(key) {
      console.log(key.name + " key press!");
    });

    my.keyboard.on("keydown", function(key) {
      console.log(key.name + " keydown!");
    });

    my.keyboard.on("keyup", function(key) {
      console.log(key.name + " keyup!");
    });
  }
}).start();
