import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class AppComponentActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, appComponentService, guid) {
        super($location,appComponentService,dispatcher,guid,AddOrUpdateAppComponentAction,AllAppComponentsAction,RemoveAppComponentAction,SetCurrentAppComponentAction)
    }    
}


export class AddOrUpdateAppComponentAction { constructor(public id, public entity) { } }

export class AllAppComponentsAction { constructor(public id, public entities) { } }

export class RemoveAppComponentAction { constructor(public id, public entity) { } }

export class AppComponentsFilterAction { constructor(public id, public term) { } }

export class SetCurrentAppComponentAction { constructor(public id) { } }
