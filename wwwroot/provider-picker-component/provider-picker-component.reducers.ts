import * as actions from "./provider-picker-component.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeProviderPickerComponentReducer = (state, action) => {
    if (action instanceof actions.RemoveProviderPickerComponentAction)
        pluckOut({ items: state.providerPickerComponents, value: action.entity.id });
    return state;
}

export const addProviderPickerComponentReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateProviderPickerComponentAction) {
        addOrUpdate({ items: state.providerPickerComponents, item: action.entity });
    }
    return state;
}

export const allProviderPickerComponentsReducer = (state, action) => {
    if (action instanceof actions.AllProviderPickerComponentsAction) {
        state.providerPickerComponents = action.entities;
    }
    return state;
}

export const setCurrentProviderPickerComponentReducer = (state, action) => {
    if (action instanceof actions.SetCurrentProviderPickerComponentAction) {
        state.currentProviderPickerComponentId = action.id;
    }
    return state;
}
