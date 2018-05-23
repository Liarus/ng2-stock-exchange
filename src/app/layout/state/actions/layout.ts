import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
    ExpandSidebar = '[Layout] Toggle Sidebar',
    CollapseSeidebar = '[Layout] Collapse Sidebar'
}

export class ExpandSidebar implements Action {
    readonly type = LayoutActionTypes.ExpandSidebar;
}

export class CollapseSeidebar implements Action {
    readonly type = LayoutActionTypes.CollapseSeidebar;
}

export type LayoutActions =
    ExpandSidebar
    | CollapseSeidebar;
