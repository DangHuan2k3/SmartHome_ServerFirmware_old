const ESP = require('../models/ESP');
const { generateObjectID } = require('../../util/mongoose');
const { json } = require('express');

class ESPController {


    // [GET] /Object_1s/get
    // get(req, res, next) {
    //     res.json(req.body);
    // }

    // [POST] /esp/connect/:id
    //
    connect(req, res, next) {
        let jsonRes = {
            _id: generateObjectID().toString(),
            _idESP: req.params.id,
            numDevices: parseInt(req.query.numDevices),
        };
        const devices = [];
        const pinESP = ['D1', 'D2', 'D5', 'D6']
        for (let index = 0; index < parseInt(req.query.numDevices); index++) {
            const idGenerated = generateObjectID();
            const pin = {
                _id: idGenerated,
                pin: pinESP[index]
            }

            devices.push(pin);
        }
        jsonRes.devices = devices;

        res.json(jsonRes);

        const esp = ESP(jsonRes);
        esp.save()
            .catch(next)
    }

}

module.exports = new ESPController; // Tạo một instance cho TestController

//const CourseController = require('./CourseController');