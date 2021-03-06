import { CanActivate, Component } from "../core/component-decorators";
import { ButtonActionCreator } from "./button.actions";

@Component({
    templateUrl: "wwwroot/button/button.component.html",
    selector: "calypso-button",
    componentName: "calypsoButtonComponent",
    inputs: ['caption', 'onClick']
})
export class ButtonComponent {
    constructor() { }
  
}
