import * as actions from "./website.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeWebsiteReducer = (state, action) => {
    if (action instanceof actions.RemoveWebsiteAction)
        pluckOut({ items: state.websites, value: action.entity.id });
    return state;
}

export const addWebsiteReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateWebsiteAction) {
        addOrUpdate({ items: state.websites, item: action.entity });
    }
    return state;
}

export const allWebsitesReducer = (state, action) => {
    if (action instanceof actions.AllWebsitesAction) {
        state.websites = action.entities;
    }
    return state;
}
