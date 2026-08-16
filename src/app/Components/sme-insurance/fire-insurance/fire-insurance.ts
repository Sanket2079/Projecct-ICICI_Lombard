import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fire-insurance',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './fire-insurance.html',
  styleUrl: './fire-insurance.css'
})
export class FireInsurance {

  // =====================================================
  // FORM VALUES
  // =====================================================

  mobileNumber: string = '';

  companyName: string = '';

  pincode: string = '';

  email: string = '';

  agreeTerms: boolean = false;

  whatsappUpdates: boolean = false;


  // =====================================================
  // STEP
  // =====================================================

  currentStep: number = 1;


  // =====================================================
  // ERROR
  // =====================================================

  formError: string = '';


  // =====================================================
  // PROCEED
  // =====================================================

  proceed(): void {

    this.formError = '';


    // Mobile validation
    if (
      !/^[6-9][0-9]{9}$/.test(
        this.mobileNumber.trim()
      )
    ) {

      this.formError =
        'Please enter a valid 10-digit mobile number.';

      return;
    }


    // Company validation
    if (!this.companyName.trim()) {

      this.formError =
        'Please enter your Shop/Company name.';

      return;
    }


    // Pincode validation
    if (!/^[0-9]{6}$/.test(this.pincode.trim())) {

      this.formError =
        'Please enter a valid 6-digit pincode.';

      return;
    }


    // Email validation
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        this.email.trim()
      )
    ) {

      this.formError =
        'Please enter a valid email address.';

      return;
    }


    // Terms validation
    if (!this.agreeTerms) {

      this.formError =
        'Please agree to the terms and conditions.';

      return;
    }


    // Move to next step
    this.currentStep = 2;

    console.log(
      'Mobile:',
      this.mobileNumber
    );

    console.log(
      'Company:',
      this.companyName
    );

    console.log(
      'Pincode:',
      this.pincode
    );

    console.log(
      'Email:',
      this.email
    );

    console.log(
      'WhatsApp updates:',
      this.whatsappUpdates
    );
  }

  activeSection: string = 'fire-insurance';

scrollToSection(sectionId: string): void {

  // Change active navigation button
  this.activeSection = sectionId;

  // Find section
  const element = document.getElementById(sectionId);

  if (element) {

    const navHeight = 68;

    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition =
      elementPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

activeCoverageTab: 'inclusions' | 'exclusions' = 'inclusions';

showCoverageTab(
  tab: 'inclusions' | 'exclusions'
): void {
  this.activeCoverageTab = tab;
}

goToOnlineClaim(): void {
  const element = document.getElementById('online-claim');

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}


activeFaq: number | null = null;

toggleFaq(index: number): void {
  if (this.activeFaq === index) {
    this.activeFaq = null;
  } else {
    this.activeFaq = index;
  }
}

}