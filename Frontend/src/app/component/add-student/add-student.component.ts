import { Component, OnInit } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  options = {
    responseType: 'text' as const,
  };
  url="http://localhost:8080/student/addStudent";
  studentInfo={
    "name": "",
    "roll": 0,
    "stream": ""
    }

  constructor(private http:HttpClient,private router: Router) { }
  streams = new FormControl('');

  streamList: string[] = ['CSE', 'IT', 'ECE', 'EE'];

  addStudent(){
    let temp=this.http.get(this.url,{params:this.studentInfo});
    temp.subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/']);
    });
    return temp;
  }
  clearB(){
    this.studentInfo={
      "name": "",
      "roll": 0,
      "stream": ""
      };
  }
}
