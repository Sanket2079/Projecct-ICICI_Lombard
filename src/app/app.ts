import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { HeaderComp } from './Components/Header_Component/header-comp/header-comp';
// import { FooterComp } from './Components/footer-comp/footer-comp';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, HeaderComp, FooterComp],
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ICICI_Lombard');
}
