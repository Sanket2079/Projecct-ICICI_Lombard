import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rightside',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rightside.html',
  styleUrls: ['./rightside.css'],
})
export class Rightside {
  tripType: 'single' | 'multi' = 'single';
  
  // Single Trip fields
  geographyMode: 'geography' | 'country' = 'geography';
  selectedGeography: string | null = 'usa';
  departureDate = '';
  returnDate = '';
  termsAccepted = false;
  visaAccepted = false;

  // Multi Trip fields
  selectedMultiGeography: string | null = 'worldwide-with-usa';
  tripDuration = '';
  multiStartDate = '';

  submitted = false;

  get isContinueDisabled(): boolean {
    if (this.tripType === 'single') {
      return !this.selectedGeography || !this.departureDate || !this.returnDate || !this.termsAccepted || !this.visaAccepted;
    } else {
      return !this.selectedMultiGeography || !this.tripDuration || !this.multiStartDate || !this.termsAccepted;
    }
  }

  continue() {
    this.submitted = true;
  }
}
