import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from './../material/material.module';
import { routing } from './core.routing';
import { reducers } from './state/reducers';

import {
    LayoutComponent
} from './containers';

const MODULE_COMPONENTS = [
    LayoutComponent
];

const MODULE_PROVIDERS = [
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        routing,
        MaterialModule,
        StoreModule.forFeature('core', reducers),
    ],
    declarations: [
        MODULE_COMPONENTS
    ],
    exports: [
        MODULE_COMPONENTS
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: CoreModule,
            providers: [MODULE_PROVIDERS]
        };
    }
}
