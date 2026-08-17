import { Routes } from '@angular/router';
import { claimsGuard } from './Gaurds/claims-guard';
import { HealthClaimsComp } from './Components/Claims_Component/health-claims-comp/health-claims-comp';
import { MotorClaimsComp } from './Components/Claims_Component/motor-claims-comp/motor-claims-comp';
import { TravelClaimsComp } from './Components/Claims_Component/travel-claims-comp/travel-claims-comp';
import { HomeClaimsComp } from './Components/Claims_Component/home-claims-comp/home-claims-comp';
import { ClaimsMainComp } from './Components/Claims_Component/claims-main-comp';
import { HeaderComp } from './Components/Header_Component/header-comp/header-comp';

export const routes: Routes = [

    {path : 'Header' , component : HeaderComp},
    {
        path : 'Claims',
        component : ClaimsMainComp,
        canActivate : [claimsGuard],
        children : [
            {path : 'Health' , component : HealthClaimsComp},
            {path : 'Motor' , component : MotorClaimsComp},
            {path : 'Travel' , component : TravelClaimsComp},
            {path : 'Home' , component : HomeClaimsComp},

        ]
    },
];
