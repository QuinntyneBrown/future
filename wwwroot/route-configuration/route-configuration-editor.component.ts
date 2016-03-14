import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./route-configuration.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/route-configuration/edit/:routeConfigurationId",
    templateUrl: "wwwroot/route-configuration/route-configuration-editor.component.html",
    selector: "route-configuration-editor",
    providers: ["$location","$routeParams","routeConfigurationActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "routeConfigurationActionCreator", ($q: angular.IQService, $route, invokeAsync, routeConfigurationActionCreator: actions.RouteConfigurationActionCreator) => {
    var id = $route.current.params.routeConfigurationId;
    return $q.all([
        invokeAsync({ action: routeConfigurationActionCreator.getById, params: { id: id } }),
        invokeAsync(routeConfigurationActionCreator.all)
    ]);
}])
export class RouteConfigurationEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private routeConfigurationActionCreator: actions.RouteConfigurationActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.routeConfigurations; 
		if (state.lastTriggeredByAction instanceof actions.RemoveRouteConfigurationAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["routeConfigurationId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["routeConfigurationId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["routeConfigurationId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.routeConfigurationActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.routeConfigurationActionCreator.create(); }

    remove = () => this.routeConfigurationActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
