import { CanActivate, Component } from "../core/component-decorators";
import { PhotoUploadActionCreator } from "./photo-upload.actions";

@Component({
    templateUrl: "wwwroot/photo-upload/photo-upload.component.html",
    selector: "photo-upload",
    providers: ["photoUploadActionCreator"]
})
export class PhotoUploadComponent {
    constructor(private photoUploadActionCreator: PhotoUploadActionCreator) { }
  
}
