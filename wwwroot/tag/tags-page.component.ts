import { CanActivate, Component } from "../core/component-decorators";
import { TagActionCreator } from "./tag.actions";

@Component({
    route:"/tags",
    templateUrl: "wwwroot/tag/tags-page.component.html",
    selector: "tags-page",
    providers: ["tagActionCreator"]
})
@CanActivate([
    "tagActionCreator", "invokeAsync",
    (tagActionCreator: TagActionCreator, invokeAsync) => invokeAsync(tagActionCreator.all)
])
export class TagsPageComponent { }
