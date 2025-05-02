import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public data: any;
  constructor( private http: HttpClient)
  {
    
  }

  public getStudent()
  {
    
    this.http.get("http://localhost:8080/student")
    .subscribe( (resp:any)=>{
    this.data = resp;
    //console.log(resp);
    return resp;
    });

    return this.data;
    /*return [
      {"studentId" : "S1",
        "studentName" : "Student Name One",
        "studentGender" : "Student Gender"
      },
      {"studentId" : "S2",
        "studentName" : "Student Name Two",
        "studentGender" : "Student Gender"
      },
      {"studentId" : "S3",
        "studentName" : "Student Name Three",
        "studentGender" : "Student Gender"
      },
      {"studentId" : "S4",
        "studentName" : "Student Name Four",
        "studentGender" : "Student Gender"
      },
      {"studentId" : "S5",
        "studentName" : "Student Name Five",
        "studentGender" : "Student Gender"
      },
      {"studentId" : "S6",
        "studentName" : "Student Name Six",
        "studentGender" : "Student Gender"
      }
    ];*/
  }

  public addNewStudent(student: any): number{
    this.http.post("http://localhost:8080/student/add", student)
    .subscribe(
      (resp)=>{
        console.log(resp);
      }
    );

    return 1;
  }
}
