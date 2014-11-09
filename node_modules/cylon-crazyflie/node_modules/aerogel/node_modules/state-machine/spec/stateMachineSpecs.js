/*global module test ok expect */

(function (global, states, q) {
  "use strict";
  var newStates;

  module('stateMachineSpecs');

  test('it exists', function () {
    ok(typeof states === 'function');
  });

  module('dsl');

  q.testStart(function () {
    newStates = states(function () {
      this.state('young', { initial: true })
        .state('old')
        .state('bliss')
        .event('age', 'young', 'old')
        .event('surgery', 'old', 'young')
        .event('cake', ['young', 'old'], 'bliss')
        ;
    });
  });

  test('builds states and attaches to state property', function () {
    q.deepEqual(newStates._states.young,
                { events: { age: 'old', cake: 'bliss' }
                , name: 'young'
                , initial: true });

    q.deepEqual(newStates._states.old,
               { events: { surgery: 'young', cake: 'bliss' }
               , name: 'old' });
  });

  test('currentState defaults to initial', function () {
    q.equal(newStates.currentState(), 'young');
  });

  test('can directly change state', function () {
    newStates.setState('old');
    q.equal(newStates.currentState(), 'old');
  });

  test('can trigger events for current state', function () {
    newStates.trigger('age');
    q.equal(newStates.currentState(), 'old');
    newStates.trigger('surgery');
    q.equal(newStates.currentState(), 'young');
    newStates.trigger('cake');
    q.equal(newStates.currentState(), 'bliss');
  });

  test('cannot trigger events for other states', function () {
    newStates.surgery();
    q.equal(newStates.currentState(), 'young');
  });

  test('has methods for each event', function () {
    newStates.age();
    q.equal(newStates.currentState(), 'old');
    newStates.cake();
    q.equal(newStates.currentState(), 'bliss');
  });

  test('can modify states with build', function () {
    newStates.build()
      .state('middleage')
      .event('age', 'young', 'middleage')
      .event('age', 'middleage', 'old')
      .event('surgery', 'middleage', 'young')
      .event('surgery', 'old', 'middleage');

    newStates.age();
    q.equal(newStates.currentState(), 'middleage');
    newStates.age();
    q.equal(newStates.currentState(), 'old');
    newStates.age();
    q.equal(newStates.currentState(), 'old');
    newStates.surgery();
    q.equal(newStates.currentState(), 'middleage');
    newStates.surgery();
    q.equal(newStates.currentState(), 'young');
  });

  test('onChange is called', function () {
    expect(2);

    newStates.onChange = function (curr, prev) {
      ok(prev === 'young');
      ok(curr === 'old');
    };

    newStates.age();
  });

  test('enter/leave methods are called', function () {
    var _in, _out;
    newStates.build()
      .state('simple', {
        enter: function () { _in = true; }
      , leave: function () { _out = true; }
      })
    .event('fall', 'young', 'simple')
    .event('learn', 'simple', 'young')
    ;

    newStates.fall();
    ok(_in);
    newStates.learn();
    ok(_out);
  });

  test('does not overwrite existing properties', function () {
    var st = states(function () {
      this.state('simple');

      this.event('_states', 'simple', 'complicated');
    });

    q.equal(typeof st._states, 'object');
  });

  test('no conflict', function () {
    var s = states.noConflict();
    q.equal(s, states);
    q.equal(window.stateMachine, undefined);
  });
}(this, this.stateMachine, this.QUnit));
