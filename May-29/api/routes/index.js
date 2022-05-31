const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const courseController = require('../controllers/courseController');

router.route('/students').get(studentController.getAllStudents);

router.route('/students/:studId').get(studentController.getStudentById);

router
  .route('/students/:studId/courses')
  .get(courseController.getStudentCoursesByStudId);

router
  .route('/students/:studId/courses/:courseId')
  .get(courseController.getStudentCoursesByCourseId);

router.route('/students/save').post(studentController.saveStudent);

router
  .route('/students/update/:studId/:studName')
  .put(studentController.updateStudent);

router
  .route('/students/delete/:id')
  .delete(studentController.deleteStudentById);

router.route('/students/delete').delete(studentController.deleteAllStudents);

module.exports = router;
