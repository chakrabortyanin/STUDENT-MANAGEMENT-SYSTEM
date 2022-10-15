import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { UpdateStudentComponent } from './component/update-student/update-student.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'AddStudent', component: AddStudentComponent },
  { path: 'UpdateStudent/:reg', component: UpdateStudentComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
