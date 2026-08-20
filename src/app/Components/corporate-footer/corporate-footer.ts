import { Component } from '@angular/core';

@Component({
  selector: 'app-corporate-footer',
  imports: [],
  templateUrl: './corporate-footer.html',
  styleUrl: './corporate-footer.css',
})
export class CorporateFooter {

  scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
}
