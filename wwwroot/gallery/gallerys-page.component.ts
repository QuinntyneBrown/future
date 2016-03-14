import { CanActivate, Component } from "../core/component-decorators";
import { GalleryActionCreator } from "./gallery.actions";

@Component({
    route:"/gallerys",
    templateUrl: "wwwroot/gallery/gallerys-page.component.html",
    selector: "gallerys-page",
    providers: ["galleryActionCreator"]
})
@CanActivate([
    "galleryActionCreator", "invokeAsync",
    (galleryActionCreator: GalleryActionCreator, invokeAsync) => invokeAsync(galleryActionCreator.all)
])
export class GallerysPageComponent { }
