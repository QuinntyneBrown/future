import * as actions from "./login.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeLoginReducer = (state, action) => {
    if (action instanceof actions.RemoveLoginAction)
        pluckOut({ items: state.logins, value: action.entity.id });
    return state;
}

export const addLoginReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateLoginAction) {
        addOrUpdate({ items: state.logins, item: action.entity });
    }
    return state;
}

export const allLoginsReducer = (state, action) => {
    if (action instanceof actions.AllLoginsAction) {
        state.logins = action.entities;
    }
    return state;
}
