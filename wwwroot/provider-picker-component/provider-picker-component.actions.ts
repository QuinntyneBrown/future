import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ProviderPickerComponentActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, providerPickerComponentService, guid) {
        super($location,providerPickerComponentService,dispatcher,guid,AddOrUpdateProviderPickerComponentAction,AllProviderPickerComponentsAction,RemoveProviderPickerComponentAction,SetCurrentProviderPickerComponentAction)
    }    
}


export class AddOrUpdateProviderPickerComponentAction { constructor(public id, public entity) { } }

export class AllProviderPickerComponentsAction { constructor(public id, public entities) { } }

export class RemoveProviderPickerComponentAction { constructor(public id, public entity) { } }

export class ProviderPickerComponentsFilterAction { constructor(public id, public term) { } }

export class SetCurrentProviderPickerComponentAction { constructor(public id) { } }
