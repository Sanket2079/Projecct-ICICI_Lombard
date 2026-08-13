import { Component } from '@angular/core';
import { Leftside } from './leftside/leftside';
import { Rightside } from './rightside/rightside';
import { CommonModule } from '@angular/common';
import { Studenttravel } from '../studenttravel/studenttravel';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-goldmultitrip',
  standalone: true,
  imports: [Leftside, Rightside, CommonModule, RouterModule],
  templateUrl: './goldmultitrip.html',
    styleUrls: ['./goldmultitrip.css'],
  })
export class Goldmultitrip {}
