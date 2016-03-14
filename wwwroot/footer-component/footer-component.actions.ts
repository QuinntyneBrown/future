import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class FooterComponentActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, footerComponentService, guid) {
        super($location,footerComponentService,dispatcher,guid,AddOrUpdateFooterComponentAction,AllFooterComponentsAction,RemoveFooterComponentAction,SetCurrentFooterComponentAction)
    }    
}


export class AddOrUpdateFooterComponentAction { constructor(public id, public entity) { } }

export class AllFooterComponentsAction { constructor(public id, public entities) { } }

export class RemoveFooterComponentAction { constructor(public id, public entity) { } }

export class FooterComponentsFilterAction { constructor(public id, public term) { } }

export class SetCurrentFooterComponentAction { constructor(public id) { } }
