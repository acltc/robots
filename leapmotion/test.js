var Cylon = require('cylon');

Cylon.robot({
  connections: [{ name: 'leapmotion', adaptor: 'leapmotion' }],
  devices: [{ name: 'leapmotion', driver: 'leapmotion' }],

  work: function(my) {
    // my.leapmotion.on('frame', function(frame) {
    //   console.log("FRAME");
    //   console.log(frame.toString());
    // });

    my.leapmotion.on('hand', function(hand) {
      var palmPosition = hand.palmPosition;
      console.log("PALM POSITION:");
      console.log("X:")
      console.log(palmPosition[0]);
      console.log("Y:")
      console.log(palmPosition[2]);
      console.log("Z:")
      console.log(palmPosition[1]);
      // console.log(hand.toString());
    });

    // my.leapmotion.on('gesture', function(gesture) {
    //   console.log("GESTURE");
    //   console.log(gesture.type);
    //   console.log(gesture.toString());
    // });
  }
}).start();