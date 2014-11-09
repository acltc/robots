/*
 * cylon keyboard
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var keypress = require('keypress'),
    EventEmitter = require('events').EventEmitter;

var Keyboard = module.exports = new EventEmitter();

Keyboard.connect = function connect() {
  var stdin = process.stdin;

  keypress(stdin);
  stdin.on('keypress', this.handleKeypress.bind(this));
  stdin.setRawMode(true);
  stdin.resume();
};

Keyboard.keyDowns = {};

Keyboard.keyDownsTimeouts = {};

Keyboard.setKeyupTimeout = function(timeoutDuration, key){
  var keyUpEvent = function() {
    this.keyDowns[key.name] = false;
    this.emit('keyup', key);
  }.bind(this);

  this.keyDownsTimeouts[key.name] = setTimeout(keyUpEvent, timeoutDuration);
};

Keyboard.handleKeypress = function handleKeypress(ch, key) {
  if (key) {
    if (key.ctrl && key.name === 'c') {
      return process.kill(process.pid, 'SIGINT');
    }

    this.emit(key.name, key);

    this.emit('keypress', key);

    if (this.keyDownsTimeouts[key.name]) {
      clearTimeout(this.keyDownsTimeouts[key.name]);
    }

    if (this.keyDowns[key.name]) {
      this.setKeyupTimeout(200, key);
    } else {
      this.keyDowns[key.name] = key;
      this.emit('keydown', key);

      this.setKeyupTimeout(500, key);
    }
  }
};
