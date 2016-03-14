import * as actions from "./route-configuration.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeRouteConfigurationReducer = (state, action) => {
    if (action instanceof actions.RemoveRouteConfigurationAction)
        pluckOut({ items: state.routeConfigurations, value: action.entity.id });
    return state;
}

export const addRouteConfigurationReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateRouteConfigurationAction) {
        addOrUpdate({ items: state.routeConfigurations, item: action.entity });
    }
    return state;
}

export const allRouteConfigurationsReducer = (state, action) => {
    if (action instanceof actions.AllRouteConfigurationsAction) {
        state.routeConfigurations = action.entities;
    }
    return state;
}

export const setCurrentRouteConfigurationReducer = (state, action) => {
    if (action instanceof actions.SetCurrentRouteConfigurationAction) {
        state.currentRouteConfigurationId = action.id;
    }
    return state;
}
