const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.route('/api/students').get(studentController.getAllStudents);

router.route('/api/getOneStudent').get(studentController.getOneStudent);

router.route('/saveOneStudent').get(studentController.getAll);

router.route('/updateStudent').get(studentController.getAll);

router.route('/deleteOneStudent').get(studentController.getAll);

router.route('/deleteAllStudent').get(studentController.getAll);

module.exports = router;
