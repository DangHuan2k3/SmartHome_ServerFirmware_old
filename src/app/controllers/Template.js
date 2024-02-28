const Course = require('../models/Course'); 
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {

    // [GET] /courses/create
    create(req, res, next) {
        // create a new course
        res.render('courses/create');
    }

}


module.exports = new CourseController; // Tạo một instance cho CourseController

//const CourseController = require('./CourseController');