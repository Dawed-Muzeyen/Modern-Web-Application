const mongoose = require('mongoose');
const Course = mongoose.model('Course', process.env.COURSE_MODEL);
const Student = mongoose.model('Student', process.env.STUDENT_MODEL);

const getStudentCoursesByStudId = function (req, res) {
  console.log('GET Courses Controller');
  const studId = req.params.studId;
  Student.findById(studId)
    .select('courses')
    .exec(function (err, student) {
      console.log('Found courses ', student.courses, ' for Student ', student);
      res.status(200).json(student.courses);
    });
};

const getStudentCoursesByCourseId = function (req, res) {
  const studId = req.params.studId;
  const courseCode = req.params.courseCode;

  Student.findById(studId)
    .select('courses')
    .exec(function (err, student) {
      console.log(
        'Found review ',
        student.courses.courseCode(courseCode),
        ' for Game ',
        student
      );
      res.status(200).json(student.course.id(courseCode));
    });
};
const saveCourse = function (req, res) {
  const cour = new Course(req.body);

  cour.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  res.status(200).send('this is saveOne');
};

const updateCourse = function (req, res) {
  const courseCode = req.params.studId;
  const courseTitle = req.params.studName;
  Student.updateOne(
    { courseCode: courseCode },
    { courseTitle: courseTitle },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log('Updated Docs : ', docs);
      }
    }
  );
  res.status(200).send('this is update function');
};

const deleteCourseById = function (req, res) {
  Student.deleteMany({ courseCode: courseCode })
    .then(function () {
      console.log('Data deleted');
    })
    .catch(function (error) {
      console.log(error);
    });
  res.status(200).send('this is delete one function');
};

const deleteAllCourses = function (req, res) {
  Student.deleteMany({})
    .then(function () {
      console.log('Data deleted');
    })
    .catch(function (error) {
      console.log(error);
    });
  res.status(200).send('this is delete all function');
};

module.exports = {
  getStudentCoursesByStudId: getStudentCoursesByStudId,
  getStudentCoursesByCourseId: getStudentCoursesByCourseId,
  saveCourse: saveCourse,
  updateCourse: updateCourse,
  deleteCourseById: deleteCourseById,
  deleteAllCourses: deleteAllCourses,
};
