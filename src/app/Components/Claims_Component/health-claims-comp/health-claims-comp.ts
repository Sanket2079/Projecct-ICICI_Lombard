import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-health-claims-comp',
  imports: [FormsModule],
  templateUrl: './health-claims-comp.html',
  styleUrl: './health-claims-comp.css',
})
export class HealthClaimsComp {

  userType: 'retail' | 'corporate' = 'retail';

  claimNumber: string = '';

  proceed() {

    if (!this.claimNumber.trim()) {
      alert('Please enter claim number');
      return;
    }

    console.log('User Type:', this.userType);
    console.log('Claim Number:', this.claimNumber);

  }

  fileClaim() {
    console.log('File a claim clicked');
  }

  partnerHospital(){
    console.log('Partner Hospital clicked');
  }

  downloads(){
    console.log('Downloads clicked');
  }

  hospitalLogin(){
    console.log('Hospital Login clicked');
  }

  support(){
    console.log('Support clicked');
  }

}


