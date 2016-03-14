import { CanActivate, Component } from "../core/component-decorators";
import { PhotoGalleryComponentActionCreator } from "./photo-gallery-component.actions";

@Component({
    templateUrl: "wwwroot/photo-gallery-component/photo-gallery-component.component.html",
    selector: "photo-gallery-component",
    providers: ["photoGalleryComponentActionCreator"]
})
export class PhotoGalleryComponentComponent {
    constructor(private photoGalleryComponentActionCreator: PhotoGalleryComponentActionCreator) { }
  
}
