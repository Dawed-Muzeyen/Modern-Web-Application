const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  CourseTitle: {
    type: String,
    required: true,
  },
  CourseCode: {
    type: String,
    required: true,
    max: 10,
    min: 10,
  },
});

const studentSchema = mongoose.Schema({
  StudName: {
    type: String,
    // required: true,
  },
  StudId: {
    type: String,
    // required: true,
    max: 10,
    min: 10,
  },
  GPA: Number,
  Courses: [courseSchema],
});
mongoose.model('Student', studentSchema, 'students');
mongoose.model('Course', courseSchema, 'courses');
