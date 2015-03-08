"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("keyboard", { adaptor: "keyboard" })
  .device("keyboard", { driver: "keyboard" })
  .on("ready", function(robot) {
    robot.keyboard.on("a", function(key) {
      console.log(key.name + " a pressed!");
    });

    robot.keyboard.on("keypress",function(key) {
      console.log(key.name + " key press!");
    });

    robot.keyboard.on("keydown", function(key) {
      console.log(key.name + " keydown!");
    });

    robot.keyboard.on("keyup", function(key) {
      console.log(key.name + " keyup!");
    });
  });

Cylon.start();
