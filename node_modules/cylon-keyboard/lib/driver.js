/*
 * cylon-keyboard driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Keys = require('./keys');

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);
}

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  Cylon.Logger.info("Driver " + this.device.name + " starting.");

  for (var i = 0; i < Keys.length; i++) {
    var key = Keys[i];
    this.defineDriverEvent({ eventName: key });
  }

  return Driver.__super__.start.apply(this, arguments);
};
