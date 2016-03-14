import { CanActivate, Component } from "../core/component-decorators";
import { AppComponentActionCreator } from "./app-component.actions";

@Component({
    templateUrl: "wwwroot/app-component/app-component.component.html",
    selector: "app-component",
    providers: ["appComponentActionCreator"]
})
export class AppComponentComponent {
    constructor(private appComponentActionCreator: AppComponentActionCreator) { }
  
}
