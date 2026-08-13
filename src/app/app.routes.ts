import { Routes } from '@angular/router';
import { HomePageComp } from './Components/home-page-comp/home-page-comp';
import { Goldmultitrip } from './Components/goldmultitrip/goldmultitrip';
import { Studenttravel } from './Components/studenttravel/studenttravel';

export const routes: Routes = [
    {path: '', component: HomePageComp},
    {path: 'travel-insurance/goldmultitrip', component:Goldmultitrip},
     {path: 'travel-insurance/studenttravel', component:Studenttravel},
];
