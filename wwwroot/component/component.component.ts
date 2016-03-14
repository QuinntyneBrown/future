import { CanActivate, Component } from "../core/component-decorators";
import { ComponentActionCreator } from "./component.actions";

@Component({
    templateUrl: "wwwroot/component/component.component.html",
    selector: "component",
    providers: ["componentActionCreator"]
})
export class ComponentComponent {
    constructor(private componentActionCreator: ComponentActionCreator) { }
  
}
