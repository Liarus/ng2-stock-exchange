import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
    ExpandSidebar = '[Layout] Toggle Sidebar',
    CollapseSeidebar = '[Layout] Collapse Sidebar',
    ResizeWindow = '[Layout] Resize window'
}

export class ExpandSidebar implements Action {
    readonly type = LayoutActionTypes.ExpandSidebar;
}

export class CollapseSeidebar implements Action {
    readonly type = LayoutActionTypes.CollapseSeidebar;
}

export class ResizeWndow implements Action {
    readonly type = LayoutActionTypes.ResizeWindow;

    constructor(public payload: Object) {
    }
}

export type LayoutActions =
    ExpandSidebar
    | CollapseSeidebar
    | ResizeWndow;
