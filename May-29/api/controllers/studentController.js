const dbConnection = require('../data/db.js');
const mongoose = require('mongoose');
const Student = mongoose.model('Student', process.env.STUDENT_MODEL);
const Course = mongoose.model('Course', process.env.COURSE_MODEL);
const getAllStudents = function (req, res) {
  let offset = 0;
  let count = 75;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    offset = parseInt(req.query.count, 10);
  }
  Student.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, students) {
      console.log('Found Students', students.length);
      res.json(students);
    });
};

const getStudentById = function (req, res) {
  const studId = req.params.studId;
  Student.findById(studId).exec(function (err, student) {
    const response = {
      status: 200,
      message: student,
    };
    if (err) {
      console.log('Error finding student');
      response.status = 500;
      response.message = err;
    } else if (!student) {
      console.log('student id not found');
      response.status = 404;
      response.message = { message: 'student ID not found' };
    }
    res.status(response.status).json(response.message);
  });
};

const saveStudent = function (req, res) {
  let i = 0;
  let newCourse1 = new Course({ CourseTitle: String, CourseCode: String });
  let newCourse2 = new Course({ CourseTitle: String, CourseCode: String });
  newCourse1 = {
    CourseTitle: req.body.courses[0].CourseTitle,
    CourseCode: req.body.courses[0].CourseCode,
  };

  newCourse2 = {
    CourseTitle: req.body.courses[1].CourseTitle,
    CourseCode: req.body.courses[1].CourseCode,
  };
  console.log(newCourse2);
  const newStudent = {
    StudName: req.body.StudName,
    StudId: req.body.StudId,
    GPA: req.body.GPA,
    courses: [req.body.courses],
  };

  let newStudent1 = new Student({
    StudName: req.body.StudName,
    StudId: req.body.StudId,
    GPA: req.body.GPA,
    courses: [req.body.courses],
  });

  newStudent1.save(function (err, student) {
    const response = { status: 201, message: student };
    if (err) {
      console.log('Error creating game');
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  });
};

const updateStudent = function (req, res) {
  const studId = req.params.studId;
  const studName = req.params.studName;
  Student.updateOne(
    { studId: studId },
    { studName: studName },
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

const deleteStudentById = function (req, res) {
  Student.deleteMany({ age: { $gte: 15 } })
    .then(function () {
      console.log('Data deleted');
    })
    .catch(function (error) {
      console.log(error);
    });
  res.status(200).send('this is delete one function');
};

const deleteAllStudents = function (req, res) {
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
  getAllStudents: getAllStudents,
  getStudentById: getStudentById,
  updateStudent: updateStudent,
  saveStudent: saveStudent,
  deleteAllStudents: deleteAllStudents,
  deleteStudentById: deleteStudentById,
};
