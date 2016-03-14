import * as actions from "./photo-gallery-component.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removePhotoGalleryComponentReducer = (state, action) => {
    if (action instanceof actions.RemovePhotoGalleryComponentAction)
        pluckOut({ items: state.photoGalleryComponents, value: action.entity.id });
    return state;
}

export const addPhotoGalleryComponentReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdatePhotoGalleryComponentAction) {
        addOrUpdate({ items: state.photoGalleryComponents, item: action.entity });
    }
    return state;
}

export const allPhotoGalleryComponentsReducer = (state, action) => {
    if (action instanceof actions.AllPhotoGalleryComponentsAction) {
        state.photoGalleryComponents = action.entities;
    }
    return state;
}

export const setCurrentPhotoGalleryComponentReducer = (state, action) => {
    if (action instanceof actions.SetCurrentPhotoGalleryComponentAction) {
        state.currentPhotoGalleryComponentId = action.id;
    }
    return state;
}
