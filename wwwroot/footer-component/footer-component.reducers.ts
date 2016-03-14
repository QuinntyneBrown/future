import * as actions from "./footer-component.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeFooterComponentReducer = (state, action) => {
    if (action instanceof actions.RemoveFooterComponentAction)
        pluckOut({ items: state.footerComponents, value: action.entity.id });
    return state;
}

export const addFooterComponentReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateFooterComponentAction) {
        addOrUpdate({ items: state.footerComponents, item: action.entity });
    }
    return state;
}

export const allFooterComponentsReducer = (state, action) => {
    if (action instanceof actions.AllFooterComponentsAction) {
        state.footerComponents = action.entities;
    }
    return state;
}

export const setCurrentFooterComponentReducer = (state, action) => {
    if (action instanceof actions.SetCurrentFooterComponentAction) {
        state.currentFooterComponentId = action.id;
    }
    return state;
}
