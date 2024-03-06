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


    // [POST] /:id
    async get(req, res, next) {
        const devicesNewStatus = req.body.devices;
        try {
            // Use Promise.all() to await all async operations and handle errors properly
            await Promise.all(devicesNewStatus.map(async (device) => {
                const foundDevice = await ESP.findOne({
                    _idESP: req.params.id,
                    devices: {
                        $elemMatch: {
                            _id: device.id
                        }
                    }
                });
                if (!foundDevice) {
                    throw new Error(`Not found ESP with _idESP = ${req.params.id} or device with ${device.id}`);
                }

                await ESP.updateOne({
                    _idESP: req.params.id,
                    devices: {
                        $elemMatch: {
                            _id: device.id
                        }
                    }
                }, {
                    $set: {
                        'devices.$.status': (String('on').valueOf() == new String(device.status).valueOf()) ? 1 : 0,
                    }
                });
            }));
            // If all updates are successful, send success response
            res.status(201).json({
                'text': 'Successful'
            });
        } catch (error) {
            // If any error occurs during the process, send failure response
            console.error(error);
            res.status(406).json({
                'text': 'Failure'
            });
        }

    }
}

module.exports = new ESPController; // Tạo một instance cho TestController

//const CourseController = require('./CourseController');