import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marine-insurance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marine-insurance.html',
  styleUrl: './marine-insurance.css'
})
export class MarineInsurance {

  mobileNumber: string = '';

  agreeTerms: boolean = false;
  whatsappUpdates: boolean = false;

  mobileError: string = '';

  quoteSubmitted: boolean = false;

  activeSection: string = 'about';

  constructor() {
    console.log('Marine Insurance Component Loaded');
  }

  validateMobile(): boolean {

    this.mobileError = '';

    if (this.mobileNumber.trim() === '') {

      this.mobileError = 'Please enter valid mobile number';

      return false;
    }

    if (!/^[6-9][0-9]{9}$/.test(this.mobileNumber)) {

      this.mobileError = 'Please enter valid mobile number';

      return false;
    }

    return true;
  }


  proceed() {

    if (!this.validateMobile()) {
      return;
    }

    if (!this.agreeTerms) {

      alert('Please agree to the terms and conditions.');

      return;
    }

    this.quoteSubmitted = true;

    alert(
      'Mobile number verified successfully. Your Marine Insurance quote process has started.'
    );
  }


  retrieveQuote() {

    const mobile = prompt('Enter your registered mobile number');

    if (!mobile) {
      return;
    }

    if (!/^[6-9][0-9]{9}$/.test(mobile)) {

      alert('Please enter a valid 10 digit mobile number.');

      return;
    }

    alert(
      'Quote retrieval request received for mobile number: ' + mobile
    );
  }


  scrollTo(sectionId: string) {

    this.activeSection = sectionId;

    const element = document.getElementById(sectionId);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }
  }


  allowOnlyNumbers(event: KeyboardEvent) {

    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab'
    ];

    if (
      allowedKeys.includes(event.key) ||
      /^[0-9]$/.test(event.key)
    ) {
      return;
    }

    event.preventDefault();
  }
  activeTab: 'inclusions' | 'exclusions' = 'inclusions';
}