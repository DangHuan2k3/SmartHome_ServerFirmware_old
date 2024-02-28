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
        console.log(req.query);
        console.log(req.params.id);
        let jsonRes = [];
        for (let index = 0; index < parseInt(req.query.numDevices); index++) {
            const idGenerated = generateObjectID();
            console.log(idGenerated.toString());
            jsonRes.push(idGenerated.toString());
        }

        res.json(jsonRes);


    }

}

module.exports = new ESPController; // Tạo một instance cho TestController

//const CourseController = require('./CourseController');