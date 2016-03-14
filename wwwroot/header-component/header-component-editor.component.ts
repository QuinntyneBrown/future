import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./header-component.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/header-component/edit/:headerComponentId",
    templateUrl: "wwwroot/header-component/header-component-editor.component.html",
    selector: "header-component-editor",
    providers: ["$location","$routeParams","headerComponentActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "headerComponentActionCreator", ($q: angular.IQService, $route, invokeAsync, headerComponentActionCreator: actions.HeaderComponentActionCreator) => {
    var id = $route.current.params.headerComponentId;
    return $q.all([
        invokeAsync({ action: headerComponentActionCreator.getById, params: { id: id } }),
        invokeAsync(headerComponentActionCreator.all)
    ]);
}])
export class HeaderComponentEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private headerComponentActionCreator: actions.HeaderComponentActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.headerComponents; 
		if (state.lastTriggeredByAction instanceof actions.RemoveHeaderComponentAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["headerComponentId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["headerComponentId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["headerComponentId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.headerComponentActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.headerComponentActionCreator.create(); }

    remove = () => this.headerComponentActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
