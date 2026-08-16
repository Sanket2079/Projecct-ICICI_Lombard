import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sme-dropdown',
  standalone: true,
  templateUrl: './sme-dropdown.html',
  styleUrl: './sme-dropdown.css'
})
export class SmeDropdown {

  constructor(private router: Router) {}

  openPage(path: string) {
    this.router.navigate([path]);
  }

}