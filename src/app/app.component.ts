// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentComponent, StudentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'school';

  constructor()
  {
    
  }
  ngOnInit(): void {
  }
}
