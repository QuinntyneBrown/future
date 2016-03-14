import { CanActivate, Component } from "../core/component-decorators";
import { GalleryActionCreator } from "./gallery.actions";

@Component({
    route: "/gallery/list",
    templateUrl: "wwwroot/gallery/gallery-list.component.html",
    selector: "gallery-list",
    providers: ["$location","galleryActionCreator"]
})
@CanActivate([
    "galleryActionCreator", "invokeAsync",
    (galleryActionCreator: GalleryActionCreator, invokeAsync) => invokeAsync(galleryActionCreator.all)
])
export class GalleryListComponent {
    constructor(private $location: angular.ILocationService,private galleryActionCreator: GalleryActionCreator) { }
    storeOnChange = state =>  this.entities = state.gallerys;   
    entities;
    remove = gallery => this.galleryActionCreator.remove({ entity: gallery });
    edit = gallery => this.galleryActionCreator.edit({ entity: gallery });    
}
