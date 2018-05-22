import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { QuotePageComponent } from './containers/quote-page/quote-page.component';

const routes: Routes = [
    {
      path: '',
      component: QuotePageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
