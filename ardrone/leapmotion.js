var Cylon = require('cylon');

Cylon.robot({
  connections: [{ name: 'leapmotion', adaptor: 'leapmotion' }, {name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' }  ],
  devices: [{ name: 'leapmotion', driver: 'leapmotion' },  { name: 'drone', driver: 'ardrone', connection: 'ardrone' }],



  work: function(my) {

    my.drone.takeoff(); 

    my.leapmotion.on('hand', function(hand) {
      var palmPosition = hand.palmPosition;
      
      console.log("PALM POSITION:");
      console.log("X:")
      console.log(palmPosition[0]);
      console.log("Y:")
      console.log(palmPosition[2]);
      console.log("Z:")
      console.log(palmPosition[1]);
        
      my.drone.up(palmPosition[1]) // Z position
      my.drone.front(palmPosition[2]*0.1) // Y position 
      my.drone.down(palmPosition[0]) // X position
    

    });

    after((10).seconds(), function() {
      my.drone.land();
    });

  }
}).start();
