import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent  {
  
  employee: Employee = new Employee();

  departments: string[] = [
    "IT","HR", "Admin", "Sales", "Payroll"
  ]

  add(addform: NgForm){
    console.log(addform.value);
  }
}

export class Employee{
  empno: number;
  name: string;
  dateofJoining: string;
  salary: number;
  department: string;
}