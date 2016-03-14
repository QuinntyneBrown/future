import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class GalleryActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, galleryService, guid) {
        super($location,galleryService,dispatcher,guid,AddOrUpdateGalleryAction,AllGallerysAction,RemoveGalleryAction,SetCurrentGalleryAction)
    }    
}


export class AddOrUpdateGalleryAction { constructor(public id, public entity) { } }

export class AllGallerysAction { constructor(public id, public entities) { } }

export class RemoveGalleryAction { constructor(public id, public entity) { } }

export class GallerysFilterAction { constructor(public id, public term) { } }

export class SetCurrentGalleryAction { constructor(public id) { } }
