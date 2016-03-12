import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class AdminPageActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, adminPageService, guid) {
        super($location,adminPageService,dispatcher,guid,AddOrUpdateAdminPageAction,AllAdminPagesAction,RemoveAdminPageAction,SetCurrentAdminPageAction)
    }    
}


export class AddOrUpdateAdminPageAction { constructor(public id, public entity) { } }

export class AllAdminPagesAction { constructor(public id, public entities) { } }

export class RemoveAdminPageAction { constructor(public id, public entity) { } }

export class AdminPagesFilterAction { constructor(public id, public term) { } }

export class SetCurrentAdminPageAction { constructor(public entity) { } }
