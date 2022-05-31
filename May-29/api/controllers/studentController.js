const dbConnection = require('../data/db.js');
const mongoose = require('mongoose');
const Student = mongoose.model('Student', process.env.STUDENT_MODEL);

const getAllStudents = function (req, res) {
  let offset = 0;
  let count = 5;
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
    res.status(200).json(student);
  });
};

const saveStudent = function (req, res) {
  const newStudent = {
    StudName: req.body.StudName,
    StudId: req.body.StudId,
    GPA: req.body.GPA,
    courses: [],
  };
  Student.create(newStudent, function (err, student) {
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
