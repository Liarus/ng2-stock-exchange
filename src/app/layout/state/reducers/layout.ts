import * as fromLayout from '../actions/layout';
import { MenuItem } from '../../model/menuItem.model';
import { MENU } from '../../model/menu.model';

export interface State {
    isSidebarExpanded: boolean;
    isMobileView: boolean;
    menuItems: MenuItem[];
    windowHeight: number;
    windowWidth: number;
}

const initialState: State = {
    isSidebarExpanded: false,
    isMobileView: false,
    menuItems: MENU,
    windowHeight: window.screen.height,
    windowWidth: window.screen.width
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

        case fromLayout.LayoutActionTypes.ResizeWindow: {
            const height: number = action.payload['height'];
            const width: number = action.payload['width'];
            const isMobile: boolean = width < 768 ? true : false;
            return {
              ...state,
              windowHeight: height,
              windowWidth: width,
              isMobileView: isMobile
            };
        }

        default: {
            return state;
        }
    }
}

export const getIsSidebarExpanded = (state: State) => state.isSidebarExpanded;
export const getMenuItems = (state: State) => state.menuItems;
export const getWindowWidth = (state: State) => state.windowWidth;
export const getWindowHeight = (state: State) => state.windowHeight;
export const getIsMobileView = (state: State) => state.isMobileView;
