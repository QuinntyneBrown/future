import * as actions from "./bundle.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeBundleReducer = (state, action) => {
    if (action instanceof actions.RemoveBundleAction)
        pluckOut({ items: state.bundles, value: action.entity.id });
    return state;
}

export const addBundleReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateBundleAction) {
        addOrUpdate({ items: state.bundles, item: action.entity });
    }
    return state;
}

export const allBundlesReducer = (state, action) => {
    if (action instanceof actions.AllBundlesAction) {
        state.bundles = action.entities;
    }
    return state;
}

export const setCurrentBundleReducer = (state, action) => {
    if (action instanceof actions.SetCurrentBundleAction) {
        state.currentBundleId = action.id;
    }
    return state;
}
