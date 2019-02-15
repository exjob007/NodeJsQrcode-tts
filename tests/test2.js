var usbScanner = require("../usbscanner").usbScanner;
var getDevices = require("../usbscanner").getDevices;
var connectedHidDevices = getDevices();

//print devices
console.log("Devices: ");
console.log(connectedHidDevices);
var scanner = new usbScanner();


