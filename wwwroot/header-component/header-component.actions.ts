import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class HeaderComponentActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, headerComponentService, guid) {
        super($location,headerComponentService,dispatcher,guid,AddOrUpdateHeaderComponentAction,AllHeaderComponentsAction,RemoveHeaderComponentAction,SetCurrentHeaderComponentAction)
    }    
}


export class AddOrUpdateHeaderComponentAction { constructor(public id, public entity) { } }

export class AllHeaderComponentsAction { constructor(public id, public entities) { } }

export class RemoveHeaderComponentAction { constructor(public id, public entity) { } }

export class HeaderComponentsFilterAction { constructor(public id, public term) { } }

export class SetCurrentHeaderComponentAction { constructor(public id) { } }
