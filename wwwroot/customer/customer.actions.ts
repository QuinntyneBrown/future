import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class CustomerActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, customerService, guid) {
        super($location,customerService,dispatcher,guid,AddOrUpdateCustomerAction,AllCustomersAction,RemoveCustomerAction,SetCurrentCustomerAction)
    }    
}


export class AddOrUpdateCustomerAction { constructor(public id, public entity) { } }

export class AllCustomersAction { constructor(public id, public entities) { } }

export class RemoveCustomerAction { constructor(public id, public entity) { } }

export class CustomersFilterAction { constructor(public id, public term) { } }

export class SetCurrentCustomerAction { constructor(public id) { } }
