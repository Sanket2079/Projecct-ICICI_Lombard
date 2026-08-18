import { Component } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-car-policy-renewal',
  imports: [ReactiveFormsModule],
  templateUrl: './car-policy-renewal.html',
  styleUrl: './car-policy-renewal.css'
})
export class CarPolicyRenewal {

carForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.carForm = this.fb.group({
      searchType: ['policy', Validators.required],

      searchValue: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9]+$/)
      ]]
    });

    // Change validation when radio button changes
    this.carForm.get('searchType')?.valueChanges.subscribe(type => {
      this.setValidation(type);
    });

  }


  // Dynamic validation
  setValidation(type: string): void {

    const control = this.carForm.get('searchValue');

    if (!control) {
      return;
    }

    control.reset();
    control.clearValidators();

    if (type === 'registration') {

      control.setValidators([
        Validators.required,
        Validators.pattern(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/)
      ]);

    }
    else if (type === 'policy') {

      control.setValidators([
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9]+$/)
      ]);

    }

    control.updateValueAndValidity();
  }


  // Allow only valid characters
  onInput(event: Event): void {

    const input = event.target as HTMLInputElement;

    let value = input.value;

    const type = this.carForm.get('searchType')?.value;

    if (type === 'registration') {

      // Convert to uppercase
      value = value.toUpperCase();

      // Remove spaces and special characters
      value = value.replace(/[^A-Z0-9]/g, '');

      // Maximum 10 characters
      value = value.substring(0, 10);

    }
    else if (type === 'policy') {

      // Policy number: only letters and numbers
      value = value.replace(/[^A-Za-z0-9]/g, '');

      // Maximum 30 characters
      value = value.substring(0, 30);
    }

    input.value = value;

    this.carForm.get('searchValue')?.setValue(
      value,
      { emitEvent: false }
    );

  }


  onSubmit(): void {

    if (this.carForm.invalid) {

      this.carForm.markAllAsTouched();

      return;
    }

    console.log('Car Renewal Data:', this.carForm.value);

    alert('Valid details submitted successfully!');
  }


  get searchValue() {
    return this.carForm.get('searchValue');
  }
}