import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class RouteConfigurationActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, routeConfigurationService, guid) {
        super($location,routeConfigurationService,dispatcher,guid,AddOrUpdateRouteConfigurationAction,AllRouteConfigurationsAction,RemoveRouteConfigurationAction,SetCurrentRouteConfigurationAction)
    }    
}


export class AddOrUpdateRouteConfigurationAction { constructor(public id, public entity) { } }

export class AllRouteConfigurationsAction { constructor(public id, public entities) { } }

export class RemoveRouteConfigurationAction { constructor(public id, public entity) { } }

export class RouteConfigurationsFilterAction { constructor(public id, public term) { } }

export class SetCurrentRouteConfigurationAction { constructor(public id) { } }
