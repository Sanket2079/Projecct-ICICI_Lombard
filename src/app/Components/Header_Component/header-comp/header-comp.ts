import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-header-comp',
  imports: [CommonModule, RouterLink],
  templateUrl: './header-comp.html',
  styleUrl: './header-comp.css',
})
export class HeaderComp{
  
}