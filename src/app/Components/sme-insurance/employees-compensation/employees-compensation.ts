import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees-compensation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees-compensation.html',
  styleUrl: './employees-compensation.css'
})
export class EmployeesCompensation {

  // =========================================================
  // GET YOUR EMPLOYEES INSURED - FORM
  // =========================================================

  mobileNumber: string = '';

  currentStep: number = 1;

  agreeTerms: boolean = false;
  whatsappUpdates: boolean = false;

  mobileError: string = '';
  termsError: string = '';

  // Proceed button
  proceed(): void {

    // Clear previous errors
    this.mobileError = '';
    this.termsError = '';

    // Remove spaces
    const mobile = this.mobileNumber.trim();

    // Check empty mobile number
    if (!mobile) {
      this.mobileError = 'Please enter your mobile number.';
      return;
    }

    // Check 10 digit Indian mobile number
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      this.mobileError = 'Please enter a valid 10-digit mobile number.';
      return;
    }

    // Check terms and conditions
    if (!this.agreeTerms) {
      this.termsError = 'Please agree to the terms and conditions.';
      return;
    }

    // Go to Step 2
    this.currentStep = 2;

    console.log('Mobile Number:', mobile);
    console.log('WhatsApp Updates:', this.whatsappUpdates);
  }


  // =========================================================
  // RETRIEVE QUOTE
  // =========================================================

  retrieveQuote(): void {

    if (!this.mobileNumber.trim()) {
      this.mobileError = 'Please enter your mobile number.';
      return;
    }

    alert(
      'Your quote will be retrieved using mobile number ' +
      this.mobileNumber
    );
  }


  // =========================================================
  // GO BACK TO STEP 1
  // =========================================================

  goBack(): void {
    this.currentStep = 1;
  }


  // =========================================================
  // STEP 2 - GET QUOTE
  // =========================================================

  continueStep2(): void {

    console.log('Step 2 completed');
    console.log('Mobile:', this.mobileNumber);

    alert(
      'Your Employee Compensation quote request has been submitted successfully.'
    );
  }


  // =========================================================
  // NAVIGATION
  // =========================================================

  activeSection: string = '';

  scrollToSection(sectionId: string): void {

    // Change active navigation button
    this.activeSection = sectionId;

    // Find section
    const element = document.getElementById(sectionId);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }
  }


  // =========================================================
  // CLAIM CALCULATOR
  // =========================================================

  workerAge: number = 30;

  daysAbsent: number = 0;

  monthlySalary: number = 25000;

  deathAmount: number = 0;

  temporaryDisability: number = 0;

  permanentTotalDisability: number = 0;

  permanentPartialDisability: number = 0;


  calculateCompensation(): void {

    const salary = Number(this.monthlySalary) || 0;

    const days = Number(this.daysAbsent) || 0;


    // Death compensation
    this.deathAmount =
      salary * 12 * 2;


    // Temporary disability
    this.temporaryDisability =
      (salary / 30) * days;


    // Permanent total disability
    this.permanentTotalDisability =
      salary * 12;


    // Permanent partial disability
    this.permanentPartialDisability =
      this.permanentTotalDisability * 0.25;
  }


  // =========================================================
  // INCLUSIONS / EXCLUSIONS
  // =========================================================

  activeCoverageTab:
    'inclusions' | 'exclusions' = 'inclusions';


  showCoverageTab(
    tab: 'inclusions' | 'exclusions'
  ): void {

    this.activeCoverageTab = tab;
  }

}