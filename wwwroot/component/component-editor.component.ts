import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./component.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/component/edit/:componentId",
    templateUrl: "wwwroot/component/component-editor.component.html",
    selector: "component-editor",
    providers: ["$location","$routeParams","componentActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "componentActionCreator", ($q: angular.IQService, $route, invokeAsync, componentActionCreator: actions.ComponentActionCreator) => {
    var id = $route.current.params.componentId;
    return $q.all([
        invokeAsync({ action: componentActionCreator.getById, params: { id: id } }),
        invokeAsync(componentActionCreator.all)
    ]);
}])
export class ComponentEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private componentActionCreator: actions.ComponentActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.components; 
		if (state.lastTriggeredByAction instanceof actions.RemoveComponentAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["componentId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["componentId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["componentId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.componentActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.componentActionCreator.create(); }

    remove = () => this.componentActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
