import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class PhotoActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, photoService, guid) {
        super($location,photoService,dispatcher,guid,AddOrUpdatePhotoAction,AllPhotosAction,RemovePhotoAction,SetCurrentPhotoAction)
    }    
}


export class AddOrUpdatePhotoAction { constructor(public id, public entity) { } }

export class AllPhotosAction { constructor(public id, public entities) { } }

export class RemovePhotoAction { constructor(public id, public entity) { } }

export class PhotosFilterAction { constructor(public id, public term) { } }

export class SetCurrentPhotoAction { constructor(public id) { } }
