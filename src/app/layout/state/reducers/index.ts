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

export const getLayoutState = createFeatureSelector<LayoutState>('layout');

export const getCompleteLayoutState = createSelector(
    getLayoutState,
    (state: LayoutState) => state.layout
);

export const getIsSidebarExpanded = createSelector(
    getCompleteLayoutState,
    fromLayout.getIsSidebarExpanded
);

export const getMenuItems = createSelector(
    getCompleteLayoutState,
    fromLayout.getMenuItems
);

export const getWindowWidth = createSelector(
    getCompleteLayoutState,
    fromLayout.getWindowWidth
);

export const getWindowHeight = createSelector(
    getCompleteLayoutState,
    fromLayout.getWindowHeight
);

export const getIsMobileView = createSelector(
    getCompleteLayoutState,
    fromLayout.getIsMobileView
);
