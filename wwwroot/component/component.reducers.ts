import * as actions from "./component.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeComponentReducer = (state, action) => {
    if (action instanceof actions.RemoveComponentAction)
        pluckOut({ items: state.components, value: action.entity.id });
    return state;
}

export const addComponentReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateComponentAction) {
        addOrUpdate({ items: state.components, item: action.entity });
    }
    return state;
}

export const allComponentsReducer = (state, action) => {
    if (action instanceof actions.AllComponentsAction) {
        state.components = action.entities;
    }
    return state;
}

export const setCurrentComponentReducer = (state, action) => {
    if (action instanceof actions.SetCurrentComponentAction) {
        state.currentComponentId = action.id;
    }
    return state;
}
