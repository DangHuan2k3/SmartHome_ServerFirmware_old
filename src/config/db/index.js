const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://huan:zmgGxoAE2beOZO2h@tugino.smpitlj.mongodb.net/ ');

        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect }