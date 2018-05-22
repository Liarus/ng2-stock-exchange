import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './../material/material.module';
import { routing } from './quote.routing';

import {
    QuoteListComponent
} from './components';

import {
    QuotePageComponent
} from './containers';

const MODULE_COMPONENTS = [
    QuotePageComponent,
    QuoteListComponent
];

const MODULE_PROVIDERS = [
];

@NgModule({
    imports: [
        routing,
        CommonModule,
        MaterialModule
    ],
    declarations: [
        MODULE_COMPONENTS
    ],
    providers: [
        MODULE_PROVIDERS
    ],
})
export class QuoteModule {
}
