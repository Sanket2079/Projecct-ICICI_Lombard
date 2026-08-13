import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studenttravel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './studenttravel.html',
  styleUrls: ['./studenttravel.css'],
})
export class Studenttravel {
  mobile: string = '';
  email: string = '';

  region: string = 'Worldwide excluding USA or Canada';

  terms: boolean = true;
  whatsapp: boolean = true;


  submitForm() {

    // Check mobile number
    if (this.mobile === '') {
      alert('Please enter your mobile number.');
      return;
    }

    // Check 10 digit mobile
    if (!/^[0-9]{10}$/.test(this.mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }


    // Check email
    if (this.email === '') {
      alert('Please enter your email.');
      return;
    }


    // Check terms
    if (!this.terms) {
      alert('Please agree to the terms and conditions.');
      return;
    }


    // Display values
    console.log('Mobile:', this.mobile);
    console.log('Email:', this.email);
    console.log('Region:', this.region);
    console.log('WhatsApp:', this.whatsapp);


    alert('Form submitted successfully!');
  }
}



