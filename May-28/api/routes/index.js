const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.route('/students').get(studentController.getAllStudents);

router.route('/students/:studId').get(studentController.getStudentById);

router
  .route('/students/:studId/courses')
  .get(studentController.getStudentCoursesByStudId);

router
  .route('/students/:studId/courses/:courseId')
  .get(studentController.getStudentCoursesByCourseId);

router.route('/students/saveStudent').post(studentController.saveStudent);

router
  .route('/students/updateStudent/:id')
  .put(studentController.updateStudent);

router
  .route('/students/delete/:id')
  .delete(studentController.deleteStudentById);

router.route('/students/delete').delete(studentController.deleteAllStudents);

module.exports = router;
