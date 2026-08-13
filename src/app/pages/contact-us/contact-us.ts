import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',

})
export class ContactUs {
  userForm!: FormGroup;
  titlemodal= "Alert!";
  showhide = false;
  alertMessage = "";
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)

      ]],
      company: ['', Validators.required],
      designation: ['', Validators.required],
      message: ['', [
        Validators.required,
        Validators.minLength(20)

      ]]

    });
  }
  get f() {
    return this.userForm.controls;

  }
  submitContact() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.setErrorMessage();
      this.showhide = true;
      return;

    }
    // when all condition passed
    this.showhide = true;
    console.log(this.userForm.value);
    this.titlemodal = "Success";
    this.alertMessage = "We're happy to hear from you. Someone will be in touch within 24 hours"
  }
  setErrorMessage() {
    const validations = [
      {
        control: 'firstname',
        error: 'required',
        message: 'Please enter First Name'

      },
      {
        control: 'lastname',
        error: 'required',
        message: 'Please enter Last Name'

      },
      {
        control: 'email',
        error: 'required',
        message: 'Please enter Email ID'

      },
      {
        control: 'email',
        error: 'email',
        message: 'Please enter a valid Email ID'

      },
      {
        control: 'phone',
        error: 'required',
        message: 'Please enter Phone Number'

      },
      {
        control: 'phone',
        error: 'pattern',
        message: 'Phone Number must contain exactly 10 digits'

      },
      {
        control: 'company',
        error: 'required',
        message: 'Please enter Company Name'

      },
      {
        control: 'designation',
        error: 'required',
        message: 'Please enter Designation'

      },
      {
        control: 'message',
        error: 'required',
        message: 'Please enter Message'

      },
      {
        control: 'message',
        error: 'minlength',
        message: 'Message should contain at least 20 characters'

      }

    ];
    for (const item of validations) {
      if (this.userForm.get(item.control)?.hasError(item.error)) {
        this.alertMessage = item.message;
        break;

      }
    }
  }
  closeModal() {
    this.showhide = false;

  }
}
