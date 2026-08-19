import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-claims-comp',
  imports: [CommonModule],
  templateUrl: './home-claims-comp.html',
  styleUrl: './home-claims-comp.css',
})
export class HomeClaimsComp {

 
  isClaimInfoOpen: boolean = true;

  toggleClaimInfo() {
    this.isClaimInfoOpen = !this.isClaimInfoOpen;
  }

  policyWording() {
    console.log('Policy Wordings clicked');
  }

  downloadClaimForm() {
    console.log('Download Claim Form clicked');
  }

  claimIntimation() {
    console.log('Claim Intimation clicked');
  }

  claimProcess(){
    console.log('Claim Process clicked');
  }

  claimStatus() {
    console.log('Claim Status clicked');
  }

  support(){
    console.log('Support clicked');
  }

}

