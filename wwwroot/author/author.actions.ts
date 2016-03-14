import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class AuthorActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, authorService, guid) {
        super($location,authorService,dispatcher,guid,AddOrUpdateAuthorAction,AllAuthorsAction,RemoveAuthorAction,SetCurrentAuthorAction)
    }    
}


export class AddOrUpdateAuthorAction { constructor(public id, public entity) { } }

export class AllAuthorsAction { constructor(public id, public entities) { } }

export class RemoveAuthorAction { constructor(public id, public entity) { } }

export class AuthorsFilterAction { constructor(public id, public term) { } }

export class SetCurrentAuthorAction { constructor(public id) { } }
