import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class BundleActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, bundleService, guid) {
        super($location,bundleService,dispatcher,guid,AddOrUpdateBundleAction,AllBundlesAction,RemoveBundleAction,SetCurrentBundleAction)
    }    
}


export class AddOrUpdateBundleAction { constructor(public id, public entity) { } }

export class AllBundlesAction { constructor(public id, public entities) { } }

export class RemoveBundleAction { constructor(public id, public entity) { } }

export class BundlesFilterAction { constructor(public id, public term) { } }

export class SetCurrentBundleAction { constructor(public id) { } }
