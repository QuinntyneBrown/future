import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./route-configuration.actions";

@Component({
    route:"/routeConfigurations",
    templateUrl: "wwwroot/route-configuration/route-configurations-page.component.html",
    selector: "route-configurations-page",
    providers: ["$location","routeConfigurationActionCreator"]
})
@CanActivate([
    "routeConfigurationActionCreator", "invokeAsync",
    (routeConfigurationActionCreator: actions.RouteConfigurationActionCreator, invokeAsync) => invokeAsync(routeConfigurationActionCreator.all)
])
export class RouteConfigurationsPageComponent { 
    constructor(private $location: angular.ILocationService, routeConfigurationActionCreator: actions.RouteConfigurationActionCreator) { }
    storeOnChange = state => {        
        if (state.lastTriggeredByAction instanceof actions.SetCurrentRouteConfigurationAction) {
            this.$location.path("/routeConfiguration/edit/" + state.lastTriggeredByAction.entity.id);
        }
    }
}
