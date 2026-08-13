import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CorporateHeader } from '../../Components/corporate-header/corporate-header';
import { CorporateFooter } from '../../Components/corporate-footer/corporate-footer';

@Component({
  selector: 'app-corporate-layout',
  imports: [RouterOutlet,CorporateHeader,CorporateFooter],
  templateUrl: './corporate-layout.html',
  styleUrl: './corporate-layout.css',
})
export class CorporateLayout {}
