import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ClaimsMainComp } from './Components/Claims_Component/claims-main-comp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClaimsMainComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ICICI_Lombard');
}
