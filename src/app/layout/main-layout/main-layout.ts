import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComp } from '../../Components/Header_Component/header-comp/header-comp';
import { FooterComp } from '../../Components/footer-comp/footer-comp';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet,HeaderComp,FooterComp],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
