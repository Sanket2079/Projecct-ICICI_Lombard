import { Routes } from '@angular/router';
import { HomePageComp } from './Components/home-page-comp/home-page-comp';
import { CorporateLayout } from './layout/corporate-layout/corporate-layout';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
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
