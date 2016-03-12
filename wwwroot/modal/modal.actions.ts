import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ModalActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, modalService, guid) {
        super($location,modalService,dispatcher,guid,AddOrUpdateModalAction,AllModalsAction,RemoveModalAction,SetCurrentModalAction)
    }    
}


export class AddOrUpdateModalAction { constructor(public id, public entity) { } }

export class AllModalsAction { constructor(public id, public entities) { } }

export class RemoveModalAction { constructor(public id, public entity) { } }

export class ModalsFilterAction { constructor(public id, public term) { } }

export class SetCurrentModalAction { constructor(public entity) { } }
