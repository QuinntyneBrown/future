import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./tag.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/tag/edit/:tagId",
    templateUrl: "wwwroot/tag/tag-editor.component.html",
    selector: "tag-editor",
    providers: ["$location","$routeParams","tagActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "tagActionCreator", ($q: angular.IQService, $route, invokeAsync, tagActionCreator: actions.TagActionCreator) => {
    var id = $route.current.params.tagId;
    return $q.all([
        invokeAsync({ action: tagActionCreator.getById, params: { id: id } }),
        invokeAsync(tagActionCreator.all)
    ]);
}])
export class TagEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private tagActionCreator: actions.TagActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.tags; 
		if (state.lastTriggeredByAction instanceof actions.RemoveTagAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["tagId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["tagId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["tagId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.tagActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.tagActionCreator.create(); }

    remove = () => this.tagActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
