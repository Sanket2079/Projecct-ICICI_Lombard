import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule} from '@angular/forms';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { WhatisTravelInsurance } from "../../whatis-travel-insurance/whatis-travel-insurance";

@Component({
  selector: 'app-travel-insurance',
  providers: [provideNativeDateAdapter()],
  imports: [MatTabsModule, MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatDatepickerModule,
    FormsModule, WhatisTravelInsurance],
  templateUrl: './travel-insurance.html',
  styleUrl: './travel-insurance.css',
})
export class TravelInsurance {}
