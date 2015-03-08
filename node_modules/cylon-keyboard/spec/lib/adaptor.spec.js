/* jshint expr:true */
"use strict";

var Adaptor = source("adaptor");

var Keyboard = source("keyboard");

describe("Cylon.Adaptors.Keyboard", function() {
  var adaptor = new Adaptor({
  });

  describe("constructor", function() {
    it("sets @connector to the keyboard module", function() {
      expect(adaptor.connector).to.be.eql(Keyboard);
    });
  });

  describe("#connect", function() {
    var callback;

    beforeEach(function() {
      callback = spy();

      stub(adaptor, "defineAdaptorEvent");
      stub(Keyboard, "connect");
      adaptor.connect(callback);
    });

    afterEach(function() {
      adaptor.defineAdaptorEvent.restore();
      Keyboard.connect.restore();
    });

    it("defines adaptor events for keys", function() {
      // checking for every key is very slow (> 100ms) for some reason
      expect(adaptor.defineAdaptorEvent).to.be.calledWith({ eventName: "a" });
    });

    it("tells the keyboard module to connect", function() {
      expect(Keyboard.connect).to.be.called;
    });
  });
});
