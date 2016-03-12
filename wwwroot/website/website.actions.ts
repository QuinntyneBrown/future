import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class WebsiteActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, websiteService, guid) {
        super($location,websiteService,dispatcher,guid,AddOrUpdateWebsiteAction,AllWebsitesAction,RemoveWebsiteAction,SetCurrentWebsiteAction)
    }    
}


export class AddOrUpdateWebsiteAction { constructor(public id, public entity) { } }

export class AllWebsitesAction { constructor(public id, public entities) { } }

export class RemoveWebsiteAction { constructor(public id, public entity) { } }

export class WebsitesFilterAction { constructor(public id, public term) { } }

export class SetCurrentWebsiteAction { constructor(public entity) { } }
