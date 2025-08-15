import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserregService } from '../../services/userreg.service';

@Component({
  selector: 'app-user-registration',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit,AfterViewInit{
 

  RegistrationForm!:FormGroup

  // Access the input element
  @ViewChild('nameRef') nameInputRef!: ElementRef;


constructor(private userRegService:UserregService,private fb:FormBuilder){

}

//view child is used to change the element values or manipulate an element programatically 
//view child is used only when the view is initialised that is after view initialised
//we use view child for the parent child interaction like the input and output 


  ngAfterViewInit(): void {
    // Now the @ViewChild reference is available
    // Optional: focus input on load
    this.nameInputRef.nativeElement.focus();
  }

//FormBuilder is a helper service from Angular’s @angular/forms module that makes creating forms easier.
//FormBuilder lets you write shorter, cleaner code:


   ngOnInit(): void {
    
    this.initForm();
  }

focusName() {
  const input = this.nameInputRef.nativeElement;
  input.focus();                  // Focus the input
  input.style.backgroundColor = '#ffeb3b'; // Change color (yellow)
}

  isFocused: boolean = false;

onFocus() {
  this.isFocused = true;
  console.log('Input focused');
}

onBlur() {
  this.isFocused = false;
  console.log('Input blurred');
}


  initForm(){
this.RegistrationForm = this.fb.group({
  name: ['', Validators.required],
  age: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required],
  address: [''],
  contactNo: ['']

 })
  }

 onUserSubmit() {
    if (this.RegistrationForm.valid) {
      this.userRegService.postUser(this.RegistrationForm.value)
        .subscribe({
          next: (res) => {
            console.log('User registered successfully:', res);
            alert('Registration successful!');
            this.RegistrationForm.reset();
          },
          error: (err) => {
            console.error('Error during registration:', err);
            alert('Registration failed!');
          }
        });
    } else {
      alert('Please fill out all required fields.');
    }
  }


}
