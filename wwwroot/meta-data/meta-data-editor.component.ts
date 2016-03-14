import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./meta-data.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/meta-data/edit/:metaDataId",
    templateUrl: "wwwroot/meta-data/meta-data-editor.component.html",
    selector: "meta-data-editor",
    providers: ["$location","$routeParams","metaDataActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "metaDataActionCreator", ($q: angular.IQService, $route, invokeAsync, metaDataActionCreator: actions.MetaDataActionCreator) => {
    var id = $route.current.params.metaDataId;
    return $q.all([
        invokeAsync({ action: metaDataActionCreator.getById, params: { id: id } }),
        invokeAsync(metaDataActionCreator.all)
    ]);
}])
export class MetaDataEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private metaDataActionCreator: actions.MetaDataActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.metaDatas; 
		if (state.lastTriggeredByAction instanceof actions.RemoveMetaDataAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["metaDataId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["metaDataId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["metaDataId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.metaDataActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.metaDataActionCreator.create(); }

    remove = () => this.metaDataActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
