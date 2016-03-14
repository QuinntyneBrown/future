import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./provider.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/provider/edit/:providerId",
    templateUrl: "wwwroot/provider/provider-editor.component.html",
    selector: "provider-editor",
    providers: ["$location","$routeParams","providerActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "providerActionCreator", ($q: angular.IQService, $route, invokeAsync, providerActionCreator: actions.ProviderActionCreator) => {
    var id = $route.current.params.providerId;
    return $q.all([
        invokeAsync({ action: providerActionCreator.getById, params: { id: id } }),
        invokeAsync(providerActionCreator.all)
    ]);
}])
export class ProviderEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private providerActionCreator: actions.ProviderActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.providers; 
		if (state.lastTriggeredByAction instanceof actions.RemoveProviderAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["providerId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["providerId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["providerId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.providerActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.providerActionCreator.create(); }

    remove = () => this.providerActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
