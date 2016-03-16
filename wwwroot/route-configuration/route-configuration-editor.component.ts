import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./route-configuration.actions";
import { pluck } from "../core/pluck";
import { RouteConfiguration } from "./route-configuration.model";

@Component({
    route: "/route-configuration/edit/:id",
    templateUrl: "wwwroot/route-configuration/route-configuration-editor.component.html",
	styleUrls: ["wwwroot/route-configuration/route-configuration-editor.component.css"],
    selector: "route-configuration-editor",
    providers: ["$location","$routeParams","routeConfigurationActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "routeConfigurationActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, routeConfigurationActionCreator: actions.RouteConfigurationActionCreator) => {
    var id = $route.current.params.id;;
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
            this.entity = pluck({ value: Number(this.$routeParams["id"]), items: this.entities }) as RouteConfiguration;
            if (Object.keys(this.entity).length === 0) { this.routeConfigurationActionCreator.currentRouteConfigurationRemoved(); }
        }
        
        if (state.lastTriggeredByAction instanceof actions.AddOrUpdateRouteConfigurationSuccessAction)
            this.entity = new RouteConfiguration();
    }

	ngOnInit = () => {
        if (this.$routeParams["id"]) {
            this.entity = pluck({ value: Number(this.$routeParams["id"]), items: this.entities }) as RouteConfiguration;
        } else {
            this.entity = new RouteConfiguration();
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.routeConfigurationActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { 
			this.routeConfigurationActionCreator.addOrUpdateSuccess({ entity: this.entity });		
			this.entity = new RouteConfiguration(); 
		});
    } 
    
    create = () => { this.routeConfigurationActionCreator.create(); }

    remove = () => this.routeConfigurationActionCreator.remove({ id: this.entity.id });
         
	entity: RouteConfiguration;
	entities: Array<RouteConfiguration>;
}
