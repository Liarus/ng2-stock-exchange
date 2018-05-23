import * as fromLayout from '../actions/layout';
import { MenuItem } from '../../model/menuItem.model';
import { MENU } from '../../model/menu.model';

export interface State {
    isSidebarExpanded: boolean;
    menuItems: MenuItem[];
}

const initialState: State = {
    isSidebarExpanded: false,
    menuItems: MENU
};

export function reducer(
    state = initialState,
    action: fromLayout.LayoutActions
): State {
    switch (action.type) {
        case fromLayout.LayoutActionTypes.CollapseSeidebar: {
            return {
                ...state,
                isSidebarExpanded: false
            };
        }

        case fromLayout.LayoutActionTypes.ExpandSidebar: {
            return {
                ...state,
                isSidebarExpanded: true
            };
        }

        default: {
            return state;
        }
    }
}

export const getIsSidebarExpanded = (state: State) => state.isSidebarExpanded;
export const getMenuItems = (state: State) => state.menuItems;
