import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./app-component.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/app-component/edit/:appComponentId",
    templateUrl: "wwwroot/app-component/app-component-editor.component.html",
    selector: "app-component-editor",
    providers: ["$location","$routeParams","appComponentActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "appComponentActionCreator", ($q: angular.IQService, $route, invokeAsync, appComponentActionCreator: actions.AppComponentActionCreator) => {
    var id = $route.current.params.appComponentId;
    return $q.all([
        invokeAsync({ action: appComponentActionCreator.getById, params: { id: id } }),
        invokeAsync(appComponentActionCreator.all)
    ]);
}])
export class AppComponentEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private appComponentActionCreator: actions.AppComponentActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.appComponents; 
		if (state.lastTriggeredByAction instanceof actions.RemoveAppComponentAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["appComponentId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["appComponentId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["appComponentId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.appComponentActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.appComponentActionCreator.create(); }

    remove = () => this.appComponentActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
