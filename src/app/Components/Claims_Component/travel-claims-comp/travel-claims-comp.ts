import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-travel-claims-comp',
  imports: [FormsModule],
  templateUrl: './travel-claims-comp.html',
  styleUrl: './travel-claims-comp.css',
})
export class TravelClaimsComp {

  policyNumber: string = '';

  acceptedTerms: boolean = true;

  continueClaim(): void {

    if (!this.policyNumber.trim()) {
      alert('Please enter your policy number / passport number');
      return;
    }

    if (!this.acceptedTerms) {
      alert('Please accept the privacy policy and terms and conditions');
      return;
    }

    console.log('Policy / Passport Number:', this.policyNumber);

  }

  claimForm() {
    console.log('Claim Form clicked');
  }

  policyWordings() {
    console.log('Policy Wordings clicked');
  }

  claimsTAT() {
    console.log('Claims TAT clicked');
  }

}
