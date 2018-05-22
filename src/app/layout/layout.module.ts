import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';
import { routing } from './layout.routing';


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
        MaterialModule
    ],
    declarations: [
        MODULE_COMPONENTS
    ],
    exports: [
        MODULE_COMPONENTS
    ]
})
export class LayoutModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: LayoutModule,
            providers: [MODULE_PROVIDERS]
        };
    }
}
