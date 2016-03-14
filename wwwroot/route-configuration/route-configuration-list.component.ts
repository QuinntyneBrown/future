import { CanActivate, Component } from "../core/component-decorators";
import { RouteConfigurationActionCreator } from "./route-configuration.actions";

@Component({
    route: "/routeConfiguration/list",
    templateUrl: "wwwroot/route-configuration/route-configuration-list.component.html",
    selector: "route-configuration-list",
    providers: ["$location","routeConfigurationActionCreator"]
})
@CanActivate([
    "routeConfigurationActionCreator", "invokeAsync",
    (routeConfigurationActionCreator: RouteConfigurationActionCreator, invokeAsync) => invokeAsync(routeConfigurationActionCreator.all)
])
export class RouteConfigurationListComponent {
    constructor(private $location: angular.ILocationService,private routeConfigurationActionCreator: RouteConfigurationActionCreator) { }
    storeOnChange = state =>  this.entities = state.routeConfigurations;   
    entities;
    remove = routeConfiguration => this.routeConfigurationActionCreator.remove({ entity: routeConfiguration });
    edit = routeConfiguration => this.routeConfigurationActionCreator.edit({ entity: routeConfiguration });    
}
