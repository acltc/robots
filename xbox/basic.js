var Cylon = require('cylon');

Cylon.robot({
  connections: [{ name: 'joystick', adaptor: 'joystick' }],
  devices: [{ name: 'controller', driver: 'xbox-360' }],

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