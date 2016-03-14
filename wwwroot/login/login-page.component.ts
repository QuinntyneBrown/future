import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./login.actions";

@Component({
    templateUrl: "wwwroot/login/login-page.component.html",
    selector: "login-page",
    providers: ["$location"]
})
export class LoginPageComponent {
    constructor(private $location: angular.ILocationService) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction instanceof actions.LoginSuccessAction) { this.$location.path("/websites"); }
    }
}
