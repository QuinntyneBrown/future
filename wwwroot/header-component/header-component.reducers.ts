import * as actions from "./header-component.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeHeaderComponentReducer = (state, action) => {
    if (action instanceof actions.RemoveHeaderComponentAction)
        pluckOut({ items: state.headerComponents, value: action.entity.id });
    return state;
}

export const addHeaderComponentReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateHeaderComponentAction) {
        addOrUpdate({ items: state.headerComponents, item: action.entity });
    }
    return state;
}

export const allHeaderComponentsReducer = (state, action) => {
    if (action instanceof actions.AllHeaderComponentsAction) {
        state.headerComponents = action.entities;
    }
    return state;
}

export const setCurrentHeaderComponentReducer = (state, action) => {
    if (action instanceof actions.SetCurrentHeaderComponentAction) {
        state.currentHeaderComponentId = action.id;
    }
    return state;
}
