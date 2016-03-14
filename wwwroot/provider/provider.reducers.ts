import * as actions from "./provider.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeProviderReducer = (state, action) => {
    if (action instanceof actions.RemoveProviderAction)
        pluckOut({ items: state.providers, value: action.entity.id });
    return state;
}

export const addProviderReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateProviderAction) {
        addOrUpdate({ items: state.providers, item: action.entity });
    }
    return state;
}

export const allProvidersReducer = (state, action) => {
    if (action instanceof actions.AllProvidersAction) {
        state.providers = action.entities;
    }
    return state;
}

export const setCurrentProviderReducer = (state, action) => {
    if (action instanceof actions.SetCurrentProviderAction) {
        state.currentProviderId = action.id;
    }
    return state;
}
