import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class MetaDataActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, metaDataService, guid) {
        super($location,metaDataService,dispatcher,guid,AddOrUpdateMetaDataAction,AllMetaDatasAction,RemoveMetaDataAction,SetCurrentMetaDataAction)
    }    
}


export class AddOrUpdateMetaDataAction { constructor(public id, public entity) { } }

export class AllMetaDatasAction { constructor(public id, public entities) { } }

export class RemoveMetaDataAction { constructor(public id, public entity) { } }

export class MetaDatasFilterAction { constructor(public id, public term) { } }

export class SetCurrentMetaDataAction { constructor(public id) { } }
