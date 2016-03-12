import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class TabsActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, tabsService, guid) {
        super($location,tabsService,dispatcher,guid,AddOrUpdateTabsAction,AllTabssAction,RemoveTabsAction,SetCurrentTabsAction)
    }    
}


export class AddOrUpdateTabsAction { constructor(public id, public entity) { } }

export class AllTabssAction { constructor(public id, public entities) { } }

export class RemoveTabsAction { constructor(public id, public entity) { } }

export class TabssFilterAction { constructor(public id, public term) { } }

export class SetCurrentTabsAction { constructor(public entity) { } }
