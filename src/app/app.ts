import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< Updated upstream
=======
import { HeaderComp } from './Components/Header_Component/header-comp/header-comp';
import { FooterComp } from './Components/footer-comp/footer-comp';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ICICI_Lombard');
}
