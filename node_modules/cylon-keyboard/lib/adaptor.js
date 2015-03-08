/*
 * cylon-keyboard adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Keyboard = require("./keyboard"),
    Keys = require("./keys");

var Adaptor = module.exports = function Adaptor() {
  Adaptor.__super__.constructor.apply(this, arguments);

  this.connector = this.keyboard = Keyboard;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  for (var i = 0; i < Keys.length; i++) {
    var key = Keys[i];
    this.defineAdaptorEvent({ eventName: key });
  }

  this.keyboard.connect();

  callback();
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};
