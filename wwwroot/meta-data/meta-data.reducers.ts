import * as actions from "./meta-data.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeMetaDataReducer = (state, action) => {
    if (action instanceof actions.RemoveMetaDataAction)
        pluckOut({ items: state.metaDatas, value: action.entity.id });
    return state;
}

export const addMetaDataReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateMetaDataAction) {
        addOrUpdate({ items: state.metaDatas, item: action.entity });
    }
    return state;
}

export const allMetaDatasReducer = (state, action) => {
    if (action instanceof actions.AllMetaDatasAction) {
        state.metaDatas = action.entities;
    }
    return state;
}

export const setCurrentMetaDataReducer = (state, action) => {
    if (action instanceof actions.SetCurrentMetaDataAction) {
        state.currentMetaDataId = action.id;
    }
    return state;
}
