//Defining a Model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Device = new Schema({
    name: { type: String, required: false },
    pin: { type: String, required: true },
    type: { type: String, required: false }, // FAN, DOOR, 
    isConnected: { type: Boolean, default: false },
    status: { type: Number, default: 0 } // -1: notConnected, 0: OFF, 1: ON
}, {
    timestamps: true,
});

const ESP = new Schema({
    name: { type: String, required: false },
    _idESP: { type: String, maxLength: 255 },
    numDevices: { type: Number, required: true },
    isConnected: { type: Boolean, default: false },
    devices: [Device],

}, {
    timestamps: true,
});


module.exports = mongoose.model('esp', ESP);