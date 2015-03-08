/* jshint expr:true */
"use strict";

var EventEmitter = require("events").EventEmitter;

var keyboard = source("keyboard");

describe("Keyboard", function() {
  it("is an EventEmitter", function() {
    expect(keyboard).to.be.an.instanceOf(EventEmitter);
  });

  describe("#connect", function() {
    var stdin = process.stdin;

    beforeEach(function() {
      stub(process.stdin, "setRawMode");
      stub(process.stdin, "resume");
      stub(process.stdin, "on");

      keyboard.connect();
    });

    afterEach(function() {
      process.stdin.setRawMode.restore();
      process.stdin.resume.restore();
      process.stdin.on.restore();
    });

    it("binds a function to the 'keypress' event on stdin", function() {
      expect(stdin.on).to.be.calledWith("keypress");
    });

    it("sets raw mode to true", function() {
      expect(stdin.setRawMode).to.be.calledWith(true);
    });

    it("resumes listening on stdin", function() {
      expect(stdin.resume).to.be.called;
    });
  });

  describe("#handleKeypress", function() {
    var ch = {},
        key;

    beforeEach(function() {
      stub(keyboard, "emit");
      key = { name: "a" };
    });

    afterEach(function() {
      keyboard.emit.restore();
    });

    it("emits the key as an event from the keyboard", function() {
      keyboard.handleKeypress(ch, key);
      expect(keyboard.emit).to.be.calledWith("a", key);
    });

    context("if Ctrl-C is pressed", function() {
      beforeEach(function() {
        stub(process, "kill");
        key = { name: "c", ctrl: true };
        keyboard.handleKeypress(ch, key);
      });

      afterEach(function() {
        process.kill.restore();
      });

      it("kills the process with SIGINT", function() {
        expect(process.kill).to.be.calledWith(process.pid, "SIGINT");
      });
    });
  });
});
