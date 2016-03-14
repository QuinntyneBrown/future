import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class PhotoGalleryComponentActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, photoGalleryComponentService, guid) {
        super($location,photoGalleryComponentService,dispatcher,guid,AddOrUpdatePhotoGalleryComponentAction,AllPhotoGalleryComponentsAction,RemovePhotoGalleryComponentAction,SetCurrentPhotoGalleryComponentAction)
    }    
}


export class AddOrUpdatePhotoGalleryComponentAction { constructor(public id, public entity) { } }

export class AllPhotoGalleryComponentsAction { constructor(public id, public entities) { } }

export class RemovePhotoGalleryComponentAction { constructor(public id, public entity) { } }

export class PhotoGalleryComponentsFilterAction { constructor(public id, public term) { } }

export class SetCurrentPhotoGalleryComponentAction { constructor(public id) { } }
