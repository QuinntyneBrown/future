import { CanActivate, Component } from "../core/component-decorators";
import { RouteConfigurationActionCreator } from "./route-configuration.actions";

@Component({
    templateUrl: "wwwroot/route-configuration/route-configuration.component.html",
    selector: "route-configuration",
    providers: ["routeConfigurationActionCreator"]
})
export class RouteConfigurationComponent {
    constructor(private routeConfigurationActionCreator: RouteConfigurationActionCreator) { }
  
}
