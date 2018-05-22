
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LayoutComponent } from './containers';

export const routes: Routes = [
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            { path: 'app-quotes', loadChildren: '../quote/quote.module#QuoteModule' }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
