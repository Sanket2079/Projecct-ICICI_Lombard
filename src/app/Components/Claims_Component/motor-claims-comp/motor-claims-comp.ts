import { Component } from '@angular/core';

@Component({
  selector: 'app-motor-claims-comp',
  imports: [],
  templateUrl: './motor-claims-comp.html',
  styleUrl: './motor-claims-comp.css',
})
export class MotorClaimsComp {

  
  raiseClaim() {
    console.log('Raise a claim clicked');
  }

  submitEClaim() {
    console.log('Submit an e-claim clicked');
  }

  checkClaimStatus(){
    console.log('Check claim status clicked');
  }

  knowMore() {
    console.log('Know more clicked');
  }

}

