import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./tag.actions";

@Component({
    route:"/tags",
    templateUrl: "wwwroot/tag/tags-page.component.html",
    selector: "tags-page",
    providers: ["$location","tagActionCreator"]
})
@CanActivate([
    "tagActionCreator", "invokeAsync",
    (tagActionCreator: actions.TagActionCreator, invokeAsync) => invokeAsync(tagActionCreator.all)
])
export class TagsPageComponent { 
    constructor(private $location: angular.ILocationService, tagActionCreator: actions.TagActionCreator) { }
    storeOnChange = state => {        
        if (state.lastTriggeredByAction instanceof actions.SetCurrentTagAction) {
            this.$location.path("/tag/edit/" + state.lastTriggeredByAction.entity.id);
        }
    }
}
