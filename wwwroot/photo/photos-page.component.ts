import { CanActivate, Component } from "../core/component-decorators";
import { PhotoActionCreator } from "./photo.actions";

@Component({
    route:"/photos",
    templateUrl: "wwwroot/photo/photos-page.component.html",
    selector: "photos-page",
    providers: ["photoActionCreator"]
})
@CanActivate([
    "photoActionCreator", "invokeAsync",
    (photoActionCreator: PhotoActionCreator, invokeAsync) => invokeAsync(photoActionCreator.all)
])
export class PhotosPageComponent { }
