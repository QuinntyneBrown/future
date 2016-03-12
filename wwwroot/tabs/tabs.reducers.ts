import * as actions from "./tabs.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeTabsReducer = (state, action) => {
    if (action instanceof actions.RemoveTabsAction)
        pluckOut({ items: state.tabss, value: action.entity.id });
    return state;
}

export const addTabsReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateTabsAction) {
        addOrUpdate({ items: state.tabss, item: action.entity });
    }
    return state;
}

export const allTabssReducer = (state, action) => {
    if (action instanceof actions.AllTabssAction) {
        state.tabss = action.entities;
    }
    return state;
}
