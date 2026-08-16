import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sme-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './sme-insurance.html',
  styleUrl: './sme-insurance.css'
})
export class SmeDropdownComponent {

  isSmeDropdownOpen = false;

toggleSmeDropdown(): void {
  this.isSmeDropdownOpen = !this.isSmeDropdownOpen;
}



closeDropdown(): void {
  this.isSmeDropdownOpen = false;
}


}