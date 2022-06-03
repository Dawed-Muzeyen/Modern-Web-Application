import { Course } from "./Course";

export class Student {
    studName!: string;
    studId!: string;
    GPA!: number;
    courses: Course[]=[]

}

