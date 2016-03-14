import * as actions from "./photo-upload.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removePhotoUploadReducer = (state, action) => {
    if (action instanceof actions.RemovePhotoUploadAction)
        pluckOut({ items: state.photoUploads, value: action.entity.id });
    return state;
}

export const addPhotoUploadReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdatePhotoUploadAction) {
        addOrUpdate({ items: state.photoUploads, item: action.entity });
    }
    return state;
}

export const allPhotoUploadsReducer = (state, action) => {
    if (action instanceof actions.AllPhotoUploadsAction) {
        state.photoUploads = action.entities;
    }
    return state;
}

export const setCurrentPhotoUploadReducer = (state, action) => {
    if (action instanceof actions.SetCurrentPhotoUploadAction) {
        state.currentPhotoUploadId = action.id;
    }
    return state;
}
