import * as actions from "./admin-page.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeAdminPageReducer = (state, action) => {
    if (action instanceof actions.RemoveAdminPageAction)
        pluckOut({ items: state.adminPages, value: action.entity.id });
    return state;
}

export const addAdminPageReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateAdminPageAction) {
        addOrUpdate({ items: state.adminPages, item: action.entity });
    }
    return state;
}

export const allAdminPagesReducer = (state, action) => {
    if (action instanceof actions.AllAdminPagesAction) {
        state.adminPages = action.entities;
    }
    return state;
}
