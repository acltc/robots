var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'joystick', adaptor: 'joystick' },
  device: { name: 'controller', driver: 'xbox-360' },

  work: function(my) {
    ["a", "b", "x", "y"].forEach(function(button) {
      my.controller.on(button + ":press", function() {
        console.log("Button " + button + " pressed.");
      });

      my.controller.on(button + ":release", function() {
        console.log("Button " + button + " released.");
      });
    });
  }
});

Cylon.start();