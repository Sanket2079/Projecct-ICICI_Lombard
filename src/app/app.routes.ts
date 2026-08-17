import { Routes } from '@angular/router';
<<<<<<< Updated upstream

export const routes: Routes = [];
=======
import { HomePageComp } from './Components/home-page-comp/home-page-comp';
import { AllPolicyRenewal } from './Components/Renewals_Component/all-policy-renewal/all-policy-renewal';
import { BikePolicyRenewal } from './Components/Renewals_Component/bike-policy-renewal/bike-policy-renewal';
import { CarPolicyRenewal } from './Components/Renewals_Component/car-policy-renewal/car-policy-renewal';

export const routes: Routes = [
    {path: '', component: HomePageComp},
    {path: 'all_policy_renewal', component: AllPolicyRenewal},
    {path: 'bike_policy_renewal', component: BikePolicyRenewal},
    {path: 'car_policy_renewal', component: CarPolicyRenewal},

];
>>>>>>> Stashed changes
