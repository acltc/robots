/* jshint expr:true */
"use strict";

var keyboard = source("cylon-keyboard");

var Adaptor = source("adaptor"),
    Driver = source("driver");

describe("Cylon.Keyboard", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(keyboard.adaptors).to.be.eql(["keyboard"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(keyboard.drivers).to.be.eql(["keyboard"]);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the keyboard Adaptor", function() {
      expect(keyboard.adaptor({})).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the keyboard Driver", function() {
      var opts = { device: { connection: {} } };
      expect(keyboard.driver(opts)).to.be.an.instanceOf(Driver);
    });
  });
});
