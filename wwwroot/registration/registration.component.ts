import { CanActivate, Component } from "../core/component-decorators";
import { RegistrationActionCreator } from "./registration.actions";

@Component({
    templateUrl: "wwwroot/registration/registration.component.html",
    selector: "registration",
    providers: ["registrationActionCreator"]
})
export class RegistrationComponent {
    constructor(private registrationActionCreator: RegistrationActionCreator) { }
  
    tryToRegister = () => {        
        this.registrationActionCreator.register({
            data: this.entity
        });
    }

    entity = {
        firstname: "Mike",
        lastname: "Jackson",
        emailAddress: "Mike@Jackson.com",
        confirmEmailAddress: "Mike@Jackson.com",
        password: "password",
    }
}
