import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  public data: any;
  public title: string = "List of students";

  constructor(private studentService: StudentService)
  {
    this.data = studentService.getStudent();
  }

  ngOnInit(): void {
    
  }

}
