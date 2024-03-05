const ESP = require('../models/ESP');
const { createNewESP } = require('../../util/esp');
const { generateObjectID } = require('../../util/mongoose');
const { json } = require('express');
const { consoleLog } = require('@ngrok/ngrok');

class ESPController {


    // [GET] /Object_1s/get
    // get(req, res, next) {
    //     res.json(req.body);
    // }

    // [GET] /esp/connect/:id?numDevices=
    connect(req, res, next) {
        ESP.findOne({ _idESP: req.params.id })
            .then((esp) => {
                if (esp) {
                    console.log('existed in db');
                    return Promise.resolve(esp);
                } else {
                    const jsonNewESP = createNewESP(req.params.id, req.query.numDevices);
                    const espNew = ESP(jsonNewESP);
                    espNew.save();
                    return Promise.resolve(espNew);
                }
            }).then((savedEsp) => {
                res.json(savedEsp)
            })
            .catch(next);


    }

}

module.exports = new ESPController; // Tạo một instance cho TestController

//const CourseController = require('./CourseController');