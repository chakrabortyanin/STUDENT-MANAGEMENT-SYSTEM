import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface StudentElement {
  name: string;
  stream: string;
  roll: number;
  regNo: number;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  url="http://localhost:8080/student/";
  urlDel="http://localhost:8080/student/deleteStudent/";
  
  headers=['name','stream','roll','regNo','actions'];
  st:StudentElement[]=[];
  dataSource = new MatTableDataSource(this.st);

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.loadData();
    
  }
  loadData(){
    this.http.get(this.url, {responseType: 'json'}).subscribe((data )=>{
      console.log(data);
      this.st = Object.assign([], data);
      this.dataSource = new MatTableDataSource(this.st);
    });;
    
    
  }
  gotoRegPage(){
    this.router.navigate(['/AddStudent']);
  }
  deleteByReg(regNo: number){
    this.http.get(this.urlDel+regNo, {responseType: 'text'}).subscribe((data )=>{
      console.log(data);
      this.loadData();
    });
  }
  updateByReg(regNo: number){
    this.router.navigate(['/UpdateStudent/'+regNo]);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
