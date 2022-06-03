import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../model/Course';
import { Student } from '../model/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  course1: Course = {
    courseTitle: "EA",
    courseCode: "122"
  }
 
  course2: Course = {
    courseTitle: "MWA",
    courseCode: "111"
  }
  
students: Student[]= [
  {
    studName: "Osman", 
    studId: "223", 
    GPA: 3.31, 
   courses: [this.course1, this.course2]
    }]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onStudent(studId: string): void {
this.router.navigate(['students/'+studId])
  }
}
