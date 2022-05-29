api / students / api / students / 1537;
api / students / 1537 / courses;
api / students / 1537 / courses / 1123;

const getAllStudents = function (req, res) {
  res.send('hi all, this is get all');
};

const getOneStudent = function (req, res) {
  res.send('this is get one function');
};

const getAllStudentsCourse = function (req, res) {
  res.send('hi all, this is get all');
};

const getOneStudentCourse = function (req, res) {
  res.send('this is get one function');
};
const saveOneStudent = function (req, res) {
  res.send('this is saveOne');
};

const updateOneStudent = function (req, res) {
  res.send('this is update function');
};

const deleteOneStudent = function (req, res) {
  res.send('this is delete one function');
};

const deleteAllStudents = function (req, res) {
  res.send('this is delete all function');
};

module.exports = {
  getAll: getAll,
  getOne: getOne,
  update: update,
  saveOne: saveOne,
  deleteAll: deleteAll,
  deleteOne: deleteOne,
};
