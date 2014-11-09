StateMachine.js
===============

A simple state machine library. Loosely based on the ruby library aasm.

Example
-------
### Node
    var stateMachine = require('state-machine');
    // do stuff

### Browser
    (function (stateMachine) {
      // do stuff
    }(window.stateMachine));

### Define States and Events

    var myStates = stateMachine(function () {
      this.state('young', { initial: true })
        .state('middleage')
        .state('old')
        .event('age', 'young', 'middleage')
        .event('age', 'middleage', 'old')
        .event('enlightened', ['young', 'middleage', 'old'], 'bliss')
        ;
    });

    console.log(myState.currentState()); // young
    myStates.age();
    console.log(myState.currentState()); // middleage
    myStates.age();
    console.log(myState.currentState()); // old
    myStates.enlightened();
    console.log(myState.currentState()); // bliss

API
---
Pick your poison:

### Callback

    var myStates = stateMachine(function (builder) {
      builder.state('young', { initial: true })
             .event(...)
    });

### Chain

    var myStates = stateMachine();

    myStates
      .build()
      .state('young', { initial: true })
      .event()
      ...

Hooks
-----
    var myStates = stateMachine();

    myStates.build()
      .state('young', { initial: true
                      , leave: function () { /* do stuff */ }
                      , enter: function () { /* do stuff */ }
                      });

    myStates.onChange = function (currentStateName, previousStateName) {
      // do stuff
    };
