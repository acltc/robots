var usb = require('./');
usb.setDebugLevel(4)
var TESSEL_VID = 0x1d50;
var TESSEL_PID = 0x6097;

var NXP_ROM_VID = 0x1fc9;
var NXP_ROM_PID = 0x000c;

function findDevice() {
    return usb.findByIds(TESSEL_VID, TESSEL_PID) || usb.findByIds(NXP_ROM_VID, NXP_ROM_PID);
}

function guessDeviceState(device) {
    if (!device) {
        return undefined;
    } else if (device.deviceDescriptor.idProduct === NXP_ROM_PID) {
        return 'rom';
    } else if (device.deviceDescriptor.bcdDevice>>8 === 0) {
        return 'dfu';
    } else {
        return 'app';
    }
}

setInterval(function() {
	var dev = findDevice();
	if (dev) {
        console.log(dev.seen, dev.deviceDescriptor.bcdDevice.toString(16))
        dev.seen = true;
        //dev.__destroy();
	}
	console.log(guessDeviceState(dev))
    if (global.gc) gc();
}, 1000);
