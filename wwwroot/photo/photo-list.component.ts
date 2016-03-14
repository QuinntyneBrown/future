import { CanActivate, Component } from "../core/component-decorators";
import { PhotoActionCreator } from "./photo.actions";

@Component({
    route: "/photo/list",
    templateUrl: "wwwroot/photo/photo-list.component.html",
    selector: "photo-list",
    providers: ["$location","photoActionCreator"]
})
@CanActivate([
    "photoActionCreator", "invokeAsync",
    (photoActionCreator: PhotoActionCreator, invokeAsync) => invokeAsync(photoActionCreator.all)
])
export class PhotoListComponent {
    constructor(private $location: angular.ILocationService,private photoActionCreator: PhotoActionCreator) { }
    storeOnChange = state =>  this.entities = state.photos;   
    entities;
    remove = photo => this.photoActionCreator.remove({ entity: photo });
    edit = photo => this.photoActionCreator.edit({ entity: photo });    
}
