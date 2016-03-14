import { CanActivate, Component } from "../core/component-decorators";
import { AuthorActionCreator } from "./author.actions";

@Component({
    route:"/authors",
    templateUrl: "wwwroot/author/authors-page.component.html",
    selector: "authors-page",
    providers: ["authorActionCreator"]
})
@CanActivate([
    "authorActionCreator", "invokeAsync",
    (authorActionCreator: AuthorActionCreator, invokeAsync) => invokeAsync(authorActionCreator.all)
])
export class AuthorsPageComponent { }
