import { CanActivate, Component } from "../core/component-decorators";
import { HeaderComponentActionCreator } from "./header-component.actions";

@Component({
    templateUrl: "wwwroot/header-component/header-component.component.html",
    selector: "header-component",
    providers: ["headerComponentActionCreator"]
})
export class HeaderComponentComponent {
    constructor(private headerComponentActionCreator: HeaderComponentActionCreator) { }
  
}
