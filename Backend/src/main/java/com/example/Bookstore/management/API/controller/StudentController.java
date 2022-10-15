package com.example.Bookstore.management.API.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.Bookstore.management.API.entity.Student;
import com.example.Bookstore.management.API.repo.StudentRepo;

import java.util.*; 

@RestController
@RequestMapping("/student")
@CrossOrigin("*")
public class StudentController {
    @Autowired
    StudentRepo stu;

    @GetMapping("/")
    public List<Student> allStudents(){
        List<Student> a=stu.findAll();
        System.out.println(a);
        return a;
    }

    @GetMapping("/addStudent")
    public Student addStudent(@RequestParam String name,@RequestParam String stream,@RequestParam int roll){
        Student st=new Student(name,stream,roll);
        st=stu.save(st);
        return st;
    }

    @GetMapping("/regNo/{reg}")
    public Student getStudentByReg(@PathVariable int reg){
        Student st=stu.findByRegNo((long)reg);
        return st;
    }

    @GetMapping("/name/{name}")
    public Student getStudentByname(@PathVariable String name){
        Student st=stu.findByName(name);
        return st;
    }

    @GetMapping("/deleteStudent/{reg}")
    public String deleteStudent(@PathVariable int reg){
        try{
            stu.deleteById((long)reg);
        }catch(Exception e){
            return "Not Found";
        }   
        return "Done"; 
    }

    @GetMapping("/updateStudent")
    public Student updateStudent(@RequestParam long  reg,@RequestParam String name,@RequestParam String stream,@RequestParam int roll){
        
        Student st=new Student(reg,name,stream,roll);
        stu.save(st);
        return st;
    }
}
