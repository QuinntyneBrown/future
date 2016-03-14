import { CanActivate, Component } from "../core/component-decorators";
import { PhotoActionCreator } from "./photo.actions";

@Component({
    templateUrl: "wwwroot/photo/photo.component.html",
    selector: "photo",
    providers: ["photoActionCreator"]
})
export class PhotoComponent {
    constructor(private photoActionCreator: PhotoActionCreator) { }
  
}
