import { CanActivate, Component } from "../core/component-decorators";
import { RouteConfigurationActionCreator } from "./route-configuration.actions";

@Component({
    route:"/routeConfigurations",
    templateUrl: "wwwroot/route-configuration/route-configurations-page.component.html",
    selector: "route-configurations-page",
    providers: ["routeConfigurationActionCreator"]
})
@CanActivate([
    "routeConfigurationActionCreator", "invokeAsync",
    (routeConfigurationActionCreator: RouteConfigurationActionCreator, invokeAsync) => invokeAsync(routeConfigurationActionCreator.all)
])
export class RouteConfigurationsPageComponent { }
