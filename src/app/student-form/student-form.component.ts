import { Component } from '@angular/core';
import { StudentService } from '../student/student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  constructor(private studentService: StudentService)
  {

  }

  public addNewStudent(studentFormValue: any): number
  {
    return this.studentService.addNewStudent(studentFormValue);
  }
}
