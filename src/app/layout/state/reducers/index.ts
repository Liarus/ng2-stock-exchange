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
