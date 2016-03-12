import * as actions from "./backdrop.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeBackdropReducer = (state, action) => {
    if (action instanceof actions.RemoveBackdropAction)
        pluckOut({ items: state.backdrops, value: action.entity.id });
    return state;
}

export const addBackdropReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateBackdropAction) {
        addOrUpdate({ items: state.backdrops, item: action.entity });
    }
    return state;
}

export const allBackdropsReducer = (state, action) => {
    if (action instanceof actions.AllBackdropsAction) {
        state.backdrops = action.entities;
    }
    return state;
}
