import { Routes } from '@angular/router';
import { claimsGuard } from './Gaurds/claims-guard';
import { HealthClaimsComp } from './Components/Claims_Component/health-claims-comp/health-claims-comp';
import { MotorClaimsComp } from './Components/Claims_Component/motor-claims-comp/motor-claims-comp';
import { TravelClaimsComp } from './Components/Claims_Component/travel-claims-comp/travel-claims-comp';
import { HomeClaimsComp } from './Components/Claims_Component/home-claims-comp/home-claims-comp';
import { ClaimsMainComp } from './Components/Claims_Component/claims-main-comp';
import { HeaderComp } from './Components/Header_Component/header-comp/header-comp';
import { HomePageComp } from './Components/home-page-comp/home-page-comp';
import { CorporateLayout } from './layout/corporate-layout/corporate-layout';
import { MainLayout } from './layout/main-layout/main-layout';


export const routes: Routes = [

    {path: '', component: HomePageComp},
    {path : 'Header' , component : HeaderComp},

    {path : 'Claims' , component : ClaimsMainComp},
    {path : 'Claims/Health' , component : HealthClaimsComp},
    {path : 'Claims/Motor' , component : MotorClaimsComp},
    {path : 'Claims/Travel' , component : TravelClaimsComp},
    {path : 'Claims/Home' , component : HomeClaimsComp},
    // {
    //     path : 'Claims',
    //     component : ClaimsMainComp,
    //     canActivate : [claimsGuard],
    //     children : [
    //         {path : 'Health' , component : HealthClaimsComp},
    //         {path : 'Motor' , component : MotorClaimsComp},
    //         {path : 'Travel' , component : TravelClaimsComp},
    //         {path : 'Home' , component : HomeClaimsComp},

    //     ]
    // },

    // {path: '', component: HomePageComp},
    // Dashboard Pages
    {
        path: '',
        component: MainLayout, // based on route outlet in chid load pages as parent
        children: [
            {
                path: '', component: HomePageComp
            },
        ]
    },
    // Corporate Pages
    {
        path: 'corporate',
        component: CorporateLayout, // based on route outlet in chid load pages as parent
        children: [
            {
                path: 'products',
                loadComponent: () => import('./pages/corporate-products/corporate-products').then(m => m.CorporateProducts)
            },
             {
                path: 'risk-management',
                loadComponent: () => import('./pages/corporate-risk-management/corporate-risk-management').then(m => m.CorporateRiskManagement)
            },
            {
                path: 'contact-us',
                loadComponent: () => import('./pages/contact-us/contact-us').then(m => m.ContactUs)
            },

        ]
    },
];
