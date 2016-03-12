import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class LoginActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, loginService, guid) {
        super($location,loginService,dispatcher,guid,AddOrUpdateLoginAction,AllLoginsAction,RemoveLoginAction,SetCurrentLoginAction)
    }    

    tryToLogin = options => {

    }
}


export class AddOrUpdateLoginAction { constructor(public id, public entity) { } }

export class AllLoginsAction { constructor(public id, public entities) { } }

export class RemoveLoginAction { constructor(public id, public entity) { } }

export class LoginsFilterAction { constructor(public id, public term) { } }

export class SetCurrentLoginAction { constructor(public entity) { } }
