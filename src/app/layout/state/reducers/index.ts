import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLayout from './layout';
import * as fromRoot from '../../../state/reducers';

export interface LayoutState {
    layout: fromLayout.State;
}

export interface State extends fromRoot.State {
    layout: LayoutState;
}

export const reducers: ActionReducerMap<LayoutState> = {
    layout: fromLayout.reducer
};

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getIsSidebarExpanded = createSelector(
    getLayoutState,
    fromLayout.getIsSidebarExpanded
);

export const getMenuItems = createSelector(
    getLayoutState,
    fromLayout.getMenuItems
);

export const getWindowWidth = createSelector(
    getLayoutState,
    fromLayout.getWindowWidth
);

export const getWindowHeight = createSelector(
    getLayoutState,
    fromLayout.getWindowHeight
);

export const getIsMobileView = createSelector(
    getLayoutState,
    fromLayout.getIsMobileView
);
