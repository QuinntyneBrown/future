import { CanActivate, Component } from "../core/component-decorators";
import { TagActionCreator } from "./tag.actions";

@Component({
    route: "/tag/list",
    templateUrl: "wwwroot/tag/tag-list.component.html",
	styleUrls: ["wwwroot/tag/tag-list.component.css"],
    selector: "tag-list",
    providers: ["$location","tagActionCreator"]
})
@CanActivate([
    "tagActionCreator", "invokeAsync",
    (tagActionCreator: TagActionCreator, invokeAsync) => invokeAsync(tagActionCreator.all)
])
export class TagListComponent {
    constructor(private $location: angular.ILocationService,private tagActionCreator: TagActionCreator) { }
    storeOnChange = state =>  this.entities = state.tags;   
    entities;
    remove = entity => this.tagActionCreator.remove({ entity: entity });
    edit = entity => this.tagActionCreator.edit({ entity: entity });    
}
