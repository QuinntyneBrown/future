import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class RegistrationActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, registrationService, guid) {
        super($location,registrationService,dispatcher,guid,AddOrUpdateRegistrationAction,AllRegistrationsAction,RemoveRegistrationAction,SetCurrentRegistrationAction)
    }    
}


export class AddOrUpdateRegistrationAction { constructor(public id, public entity) { } }

export class AllRegistrationsAction { constructor(public id, public entities) { } }

export class RemoveRegistrationAction { constructor(public id, public entity) { } }

export class RegistrationsFilterAction { constructor(public id, public term) { } }

export class SetCurrentRegistrationAction { constructor(public entity) { } }
