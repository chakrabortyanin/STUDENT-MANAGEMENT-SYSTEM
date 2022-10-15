package com.example.Bookstore.management.API.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Bookstore.management.API.entity.Student;

public interface StudentRepo extends JpaRepository<Student,Long>{
    Student findByRegNo(Long Reg);
    Student findByName(String name);
}
