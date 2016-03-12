import * as actions from "./modal.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeModalReducer = (state, action) => {
    if (action instanceof actions.RemoveModalAction)
        pluckOut({ items: state.modals, value: action.entity.id });
    return state;
}

export const addModalReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateModalAction) {
        addOrUpdate({ items: state.modals, item: action.entity });
    }
    return state;
}

export const allModalsReducer = (state, action) => {
    if (action instanceof actions.AllModalsAction) {
        state.modals = action.entities;
    }
    return state;
}
