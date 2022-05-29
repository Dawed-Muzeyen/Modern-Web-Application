const getAllStudents = function (req, res) {
  res.send('hi all, this is get all');
};

const getStudentById = function (req, res) {
  res.send('this is get one function. Hi ' + req.params.id);
};

const getStudentCoursesByStudId = function (req, res) {
  res.send('hi all, this is get all' + req.params.studId);
};

const getStudentCoursesByCourseId = function (req, res) {
  res.send(
    'this is get one function' + req.params.studId + '  ' + req.params.courseId
  );
};
const saveStudent = function (req, res) {
  res.send('this is saveOne');
};

const updateStudent = function (req, res) {
  res.send('this is update function');
};

const deleteStudentById = function (req, res) {
  res.send('this is delete one function');
};

const deleteAllStudents = function (req, res) {
  res.send('this is delete all function');
};

module.exports = {
  getAllStudents: getAllStudents,
  getStudentById: getStudentById,
  getStudentCoursesByStudId: getStudentCoursesByStudId,
  getStudentCoursesByCourseId: getStudentCoursesByCourseId,
  updateStudent: updateStudent,
  saveStudent: saveStudent,
  deleteAllStudents: deleteAllStudents,
  deleteStudentById: deleteStudentById,
};
