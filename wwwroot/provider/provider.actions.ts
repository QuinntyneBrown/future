import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ProviderActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, providerService, guid) {
        super($location,providerService,dispatcher,guid,AddOrUpdateProviderAction,AllProvidersAction,RemoveProviderAction,SetCurrentProviderAction)
    }    
}


export class AddOrUpdateProviderAction { constructor(public id, public entity) { } }

export class AllProvidersAction { constructor(public id, public entities) { } }

export class RemoveProviderAction { constructor(public id, public entity) { } }

export class ProvidersFilterAction { constructor(public id, public term) { } }

export class SetCurrentProviderAction { constructor(public id) { } }
