import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class PhotoUploadActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, photoUploadService, guid) {
        super($location,photoUploadService,dispatcher,guid,AddOrUpdatePhotoUploadAction,AllPhotoUploadsAction,RemovePhotoUploadAction,SetCurrentPhotoUploadAction)
    }    
}


export class AddOrUpdatePhotoUploadAction { constructor(public id, public entity) { } }

export class AllPhotoUploadsAction { constructor(public id, public entities) { } }

export class RemovePhotoUploadAction { constructor(public id, public entity) { } }

export class PhotoUploadsFilterAction { constructor(public id, public term) { } }

export class SetCurrentPhotoUploadAction { constructor(public id) { } }
