//Defining a Model

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Device = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    isConnected: { type: Boolean, default: false },
}, {
    timestamps: true,
});

const ESP = new Schema({
    name: { type: String, required: true },
    numPort: { type: Number, required: true },
    devices: [Device],

}, {
    timestamps: true,
});


module.exports = mongoose.model('ESP', ESP);