/*global exports module define */

(function () {
  "use strict";

  (function exporter(name, definition) {
    var old, lib;

    // AMD
    if (typeof define === 'function') {
      define(definition);

    // CommonJS
    } else if (typeof exports === 'object') {
      module.exports = definition();

    // Browser
    } else {
      old = window[name];
      lib = definition();
      window[name] = lib;

      window[name].noConflict = function () {
        window[name] = old;
        return lib;
      };
    }
  }('stateMachine', function () {
    function is(obj, name) {
      return Object.prototype.toString.call(obj) === '[object ' + name + ']';
    }

    function extend(base) {
      var i, ii
        , source
        , name
        ;

      for (i = 1, ii = arguments.length; i < ii; i++) {
        if (!(source = arguments[i])) { continue; }

        for (name in source) {
          if (!source.hasOwnProperty(name)) { continue; }

          base[name] = source[name];
        }
      }

      return base;
    }

    function state(name, opts) {
      return extend({
        name: name
      , events: {}
      }, opts);
    }

    function stateDsl(states) {
      var dsl;

      function buildEventShortcut(name) {
        states[name] = states[name] || function () {
          states.trigger(name);
        };
      }

      return dsl = {
        state: function (name, opts) {
          states._states[name] = state(name, opts);

          return dsl;
        }

      , event: function (name, from, to) {
          var i, ii, fromState
            ;

          !is(from, 'Array') && (from = [from]);
          buildEventShortcut(name);

          for (i = 0, ii = from.length; i < ii; i++) {
            fromState = states._states[from[i]];
            fromState.events[name] = to;
          }

          return dsl;
        }
      };
    }

    function machine(initialBuild) {
      var currentState
        , me = {}
        , dsl = stateDsl(me)
        ;

      extend(me, {
        currentState: function (fullState) {
          var curr = currentState || (function () {
            var i;

            for (i in me._states) {
              if (me._states[i].initial) {
                return me._states[i];
              }
            }
          }());

          if (fullState) {
            return curr;
          }

          return curr && curr.name;
        }

      , setState: function (name) {
          var prev = me.currentState(true);
          currentState = me._states[name];

          me.onChange(me.currentState(), prev.name);
          is(currentState.enter, 'Function') && currentState.enter();
          is(prev.leave, 'Function') && prev.leave();
        }

      , trigger: function (eventName) {
          var nextState = me.currentState(true).events[eventName];
          nextState && me.setState(nextState);
        }

      , _states: {}

      , onChange: function (current, previous) { }

      , build: function (builder) {
          is(builder, 'Function') && builder.call(dsl, dsl);
          return dsl;
        }
      });

      is(initialBuild, 'Function') && me.build(initialBuild);

      return me;
    }

    return machine;
  }));
}());
