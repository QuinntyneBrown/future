import { CanActivate, Component } from "../core/component-decorators";
import { RouteConfigurationActionCreator } from "./route-configuration.actions";

@Component({
    route: "/routeConfiguration/list",
    templateUrl: "wwwroot/route-configuration/route-configuration-list.component.html",
	styleUrls: ["wwwroot/route-configuration/route-configuration-list.component.css"],
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
    remove = entity => this.routeConfigurationActionCreator.remove({ entity: entity });
    edit = entity => this.routeConfigurationActionCreator.edit({ entity: entity });    
}
