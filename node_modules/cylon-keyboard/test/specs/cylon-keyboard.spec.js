'use strict';

var module = source("cylon-keyboard");

var Adaptor = source('adaptor'),
    Driver = source('driver');

describe("Cylon.Keyboard", function() {
  describe("#register", function() {
    var robot;

    beforeEach(function() {
      robot = { registerAdaptor: spy(), registerDriver: spy() };
      module.register(robot);
    });

    it("registers the 'keyboard' adaptor with the provided Robot", function() {
      expect(robot.registerAdaptor).to.be.calledWith(
        'cylon-keyboard',
        'keyboard'
      );
    });

    it("registers the 'keyboard' driver with the provided Robot", function() {
      expect(robot.registerDriver).to.be.calledWith(
        'cylon-keyboard',
        'keyboard'
      );
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the keyboard Adaptor", function() {
      expect(module.adaptor({})).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the keyboard Driver", function() {
      var opts = { device: {} }
      expect(module.driver(opts)).to.be.an.instanceOf(Driver);
    });
  });
});
