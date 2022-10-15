package com.example.Bookstore.management.API.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_student")
public class Student {

    public Student() {}
    public Student(String name, String stream, int roll) {
        this.name = name;
        this.stream = stream;
        this.roll = roll;
    }
    

    public Student(long regNo, String name, String stream, int roll) {
        this.regNo = regNo;
        this.name = name;
        this.stream = stream;
        this.roll = roll;
    }


    @Id
    @GeneratedValue
    @Column(name="regNo")
    private long regNo;

    @Column(name="name")
    private String name;

    @Column(name="stream")
    private String stream;

    @Column(name="roll")
    private int roll;

    public long getRegNo() {
        return regNo;
    }

    public void setRegNo(long regNo) {
        this.regNo = regNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStream() {
        return stream;
    }

    public void setStream(String stream) {
        this.stream = stream;
    }

    public int getRoll() {
        return roll;
    }

    public void setRoll(int roll) {
        this.roll = roll;
    }

    @Override
    public String toString() {
        return "Student [name=" + name + ", regNo=" + regNo + ", roll=" + roll + ", stream=" + stream + "]";
    }

    
}
