import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLayout from './layout';
import * as fromRoot from '../../../state/reducers';

export interface CoreState {
    layout: fromLayout.State;
}

export interface State extends fromRoot.State {
    core: CoreState;
}

export const reducers: ActionReducerMap<CoreState> = {
    layout: fromLayout.reducer
};

export const getLayoutState = createFeatureSelector<CoreState>('core');

export const getCompleteLayoutState = createSelector(
    getLayoutState,
    (state: CoreState) => state.layout
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
