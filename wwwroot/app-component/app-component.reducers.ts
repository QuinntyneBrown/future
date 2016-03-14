import * as actions from "./app-component.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeAppComponentReducer = (state, action) => {
    if (action instanceof actions.RemoveAppComponentAction)
        pluckOut({ items: state.appComponents, value: action.entity.id });
    return state;
}

export const addAppComponentReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateAppComponentAction) {
        addOrUpdate({ items: state.appComponents, item: action.entity });
    }
    return state;
}

export const allAppComponentsReducer = (state, action) => {
    if (action instanceof actions.AllAppComponentsAction) {
        state.appComponents = action.entities;
    }
    return state;
}

export const setCurrentAppComponentReducer = (state, action) => {
    if (action instanceof actions.SetCurrentAppComponentAction) {
        state.currentAppComponentId = action.id;
    }
    return state;
}
