import { CanActivate, Component } from "../core/component-decorators";
import { AdminPageActionCreator } from "./admin-page.actions";

@Component({
    templateUrl: "wwwroot/admin-page/admin-page.component.html",
    selector: "admin-page",
    providers: ["adminPageActionCreator"]
})
export class AdminPageComponent {
    constructor(private adminPageActionCreator: AdminPageActionCreator) { }
  
}
