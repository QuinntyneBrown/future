import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./tag.actions";
import { pluck } from "../core/pluck";
import { Tag } from "./tag.model";

@Component({
    route: "/tag/edit/:id",
    templateUrl: "wwwroot/tag/tag-editor.component.html",
	styleUrls: ["wwwroot/tag/tag-editor.component.css"],
    selector: "tag-editor",
    providers: ["$location","$routeParams","tagActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "tagActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, tagActionCreator: actions.TagActionCreator) => {
    var id = $route.current.params.id;;
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
            this.entity = pluck({ value: Number(this.$routeParams["id"]), items: this.entities }) as Tag;
            if (Object.keys(this.entity).length === 0) { this.tagActionCreator.currentTagRemoved(); }
        }
        
        if (state.lastTriggeredByAction instanceof actions.AddOrUpdateTagSuccessAction)
            this.entity = new Tag();
    }

	ngOnInit = () => {
        if (this.$routeParams["id"]) {
            this.entity = pluck({ value: Number(this.$routeParams["id"]), items: this.entities }) as Tag;
        } else {
            this.entity = new Tag();
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.tagActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { 
			this.tagActionCreator.addOrUpdateSuccess({ entity: this.entity });		
			this.entity = new Tag(); 
		});
    } 
    
    create = () => { this.tagActionCreator.create(); }

    remove = () => this.tagActionCreator.remove({ id: this.entity.id });
         
	entity: Tag;
	entities: Array<Tag>;
}
