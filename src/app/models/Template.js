//Defining a Model

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 600 },
    videoID: { type: String, required: true },
}, {
    timestamps: true,
});


module.exports = mongoose.model('Course', Course);