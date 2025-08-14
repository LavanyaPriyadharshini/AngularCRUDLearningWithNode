import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserregService } from '../../services/userreg.service';

@Component({
  selector: 'app-user-registration',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit{
 

  RegistrationForm!:FormGroup

constructor(private userRegService:UserregService,private fb:FormBuilder){

}

//FormBuilder is a helper service from Angular’s @angular/forms module that makes creating forms easier.
//FormBuilder lets you write shorter, cleaner code:


   ngOnInit(): void {
    
    this.initForm();
  }


  initForm(){
 this.RegistrationForm = this.fb.group({
  name:[''],
  age:[''],
  email:[''],
  address:[''],
  contactNo:[''],
  password:['']
 })
  }


  

}
