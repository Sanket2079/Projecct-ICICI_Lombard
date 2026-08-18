
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-all-policy-renewal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './all-policy-renewal.html',
  styleUrl: './all-policy-renewal.css'
})
export class AllPolicyRenewal {

  userForm!: FormGroup;

  label = 'Phone number';

  placeholder = 'Phone number';

  helperText = '10 digit registered mobile number';

  renewOptions = [
    { id: 1, text: 'Policy number' },
    { id: 2, text: 'Phone number' },
    { id: 3, text: 'Vehicle registration number' },
    { id: 4, text: 'Loan Account Number' }
  ];

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({

      renewType: ['Phone number'],

      text: [
        '',
        [
         Validators.required,
         Validators.pattern(/^[0-9]{10}$/)
        ]
      ]

    });

    this.userForm
      .get('renewType')
      ?.valueChanges.subscribe(value => {

        this.changeField(value);

      });

  }

  changeField(value: string) {

    const control = this.userForm.get('text');

    control?.setValue('');

    switch (value) {

      case 'Policy number':

        this.label = 'Policy number';
        this.placeholder = 'ICICI Lombard policy number';
        this.helperText =
          'You can get your existing policy number through your policy document';

        control?.clearValidators();

        break;

      case 'Phone number':

        this.label = 'Phone number';
        this.placeholder = 'Phone number';
        this.helperText = '10 digit registered mobile number';

        control?.setValidators([
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]);

        break;

      case 'Vehicle registration number':

        this.label = 'Vehicle registration number';
        this.placeholder = 'Vehicle registration number';
        this.helperText = '';

        control?.clearValidators();

        break;

      case 'Loan Account Number':

        this.label = 'Loan Account Number';
        this.placeholder = 'Loan Account Number';
        this.helperText =
          'Loan account number is printed on loan document / statement';

        control?.clearValidators();

        break;

    }

    control?.updateValueAndValidity();

  }


}






