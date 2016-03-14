import { CanActivate, Component } from "../core/component-decorators";
import { GalleryActionCreator } from "./gallery.actions";

@Component({
    templateUrl: "wwwroot/gallery/gallery.component.html",
    selector: "gallery",
    providers: ["galleryActionCreator"]
})
export class GalleryComponent {
    constructor(private galleryActionCreator: GalleryActionCreator) { }
  
}
