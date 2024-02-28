const Object_1 = require('../models/Object_1');
const { mongooseToObject } = require('../../util/mongoose');

class Object_1Controller {


    // [GET] /Object_1s/get
    get(req, res, next) {
        res.json(req.body);
    }

}

module.exports = new Object_1Controller; // Tạo một instance cho TestController

//const CourseController = require('./CourseController');