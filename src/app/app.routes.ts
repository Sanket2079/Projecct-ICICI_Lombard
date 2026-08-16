import { Routes } from '@angular/router';
import { SmeDropdown } from './Components/sme-insurance/sme-dropdown/sme-dropdown';
import { GroupHealthInsurance } from './Components/sme-insurance/group-health-insurance/group-health-insurance';
import { MarineInsurance } from './Components/sme-insurance/marine-insurance/marine-insurance';
import { EmployeesCompensation } from './Components/sme-insurance/employees-compensation/employees-compensation';
import { FireInsurance } from './Components/sme-insurance/fire-insurance/fire-insurance';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'smedropdown',
    pathMatch: 'full'
  },

  {
    path: 'smedropdown',
    component: SmeDropdown
  },

  
  {
    path: 'group-health-insurance',
    component: GroupHealthInsurance
  },

  {
    path: 'marine-insurance',
    component: MarineInsurance
  },

  {
    path: 'employee-compensation',
    component:EmployeesCompensation
  },

  
  {
    path: 'fire-insurance',
    component:FireInsurance
  }
];