import { Component } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-bike-policy-renewal',
  imports: [ReactiveFormsModule],
  templateUrl: './bike-policy-renewal.html',
  styleUrl: './bike-policy-renewal.css'
})
export class BikePolicyRenewal {

  bikeForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.bikeForm = this.fb.group({
      searchType: ['policy', Validators.required],

      searchValue: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9]+$/)
      ]]
    });

    // Change validation when radio button changes
    this.bikeForm.get('searchType')?.valueChanges.subscribe(type => {
      this.setValidation(type);
    });

  }


  // Dynamic validation
  setValidation(type: string): void {

    const control = this.bikeForm.get('searchValue');

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

    const type = this.bikeForm.get('searchType')?.value;

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

    this.bikeForm.get('searchValue')?.setValue(
      value,
      { emitEvent: false }
    );

  }


  onSubmit(): void {

    if (this.bikeForm.invalid) {

      this.bikeForm.markAllAsTouched();

      return;
    }

    console.log('Bike Renewal Data:', this.bikeForm.value);

    alert('Valid details submitted successfully!');
  }


  get searchValue() {
    return this.bikeForm.get('searchValue');
  }

}