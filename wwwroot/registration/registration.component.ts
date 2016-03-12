import { CanActivate, Component } from "../core/component-decorators";
import { RegistrationActionCreator } from "./registration.actions";

@Component({
    templateUrl: "wwwroot/registration/registration.component.html",
    selector: "registration",
    providers: ["registrationActionCreator"]
})
export class RegistrationComponent {
    constructor(private registrationActionCreator: RegistrationActionCreator) { }
  
}
