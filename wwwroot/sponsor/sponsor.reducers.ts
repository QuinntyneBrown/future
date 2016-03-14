import * as actions from "./sponsor.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeSponsorReducer = (state, action) => {
    if (action instanceof actions.RemoveSponsorAction)
        pluckOut({ items: state.sponsors, value: action.entity.id });
    return state;
}

export const addSponsorReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateSponsorAction) {
        addOrUpdate({ items: state.sponsors, item: action.entity });
    }
    return state;
}

export const allSponsorsReducer = (state, action) => {
    if (action instanceof actions.AllSponsorsAction) {
        state.sponsors = action.entities;
    }
    return state;
}

export const setCurrentSponsorReducer = (state, action) => {
    if (action instanceof actions.SetCurrentSponsorAction) {
        state.currentSponsorId = action.id;
    }
    return state;
}
