import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  options = {
    responseType: 'text' as const,
  };
  urlF="http://localhost:8080/student/regNo/";
  urlU="http://localhost:8080/student/updateStudent";
  studentInfo={
    "name": "",
    "roll": 0,
    "stream": "",
    "reg":0
    }

  constructor(private http:HttpClient,private router: Router,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.studentInfo.reg = Number(this.route.snapshot.params['reg']);
    this.refresh()
    
  }

  streams = new FormControl('');
  streamList: string[] = ['CSE', 'IT', 'ECE', 'EE'];

  updateStudent(){
    let temp=this.http.get(this.urlU,{params:this.studentInfo});
    temp.subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/']);
    });
    return temp;
  }

  refresh(){
    let temp=this.http.get(this.urlF+this.studentInfo.reg,{params:this.studentInfo});
    temp.subscribe((data:any)=>{
      this.studentInfo={
      "name": data['name'],
      "roll": data['roll'],
      "stream": data['stream'],
      "reg":data['regNo']
      };
    });
  }
}
