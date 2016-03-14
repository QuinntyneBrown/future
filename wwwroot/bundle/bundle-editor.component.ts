import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./bundle.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/bundle/edit/:bundleId",
    templateUrl: "wwwroot/bundle/bundle-editor.component.html",
    selector: "bundle-editor",
    providers: ["$location","$routeParams","bundleActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "bundleActionCreator", ($q: angular.IQService, $route, invokeAsync, bundleActionCreator: actions.BundleActionCreator) => {
    var id = $route.current.params.bundleId;
    return $q.all([
        invokeAsync({ action: bundleActionCreator.getById, params: { id: id } }),
        invokeAsync(bundleActionCreator.all)
    ]);
}])
export class BundleEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private bundleActionCreator: actions.BundleActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.bundles; 
		if (state.lastTriggeredByAction instanceof actions.RemoveBundleAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["bundleId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["bundleId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["bundleId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.bundleActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.bundleActionCreator.create(); }

    remove = () => this.bundleActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
