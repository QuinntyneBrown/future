import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ComponentActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, componentService, guid) {
        super($location,componentService,dispatcher,guid,AddOrUpdateComponentAction,AllComponentsAction,RemoveComponentAction,SetCurrentComponentAction)
    }    
}


export class AddOrUpdateComponentAction { constructor(public id, public entity) { } }

export class AllComponentsAction { constructor(public id, public entities) { } }

export class RemoveComponentAction { constructor(public id, public entity) { } }

export class ComponentsFilterAction { constructor(public id, public term) { } }

export class SetCurrentComponentAction { constructor(public id) { } }
