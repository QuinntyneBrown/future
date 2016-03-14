import { CanActivate, Component } from "../core/component-decorators";
import { AuthorActionCreator } from "./author.actions";

@Component({
    route: "/author/list",
    templateUrl: "wwwroot/author/author-list.component.html",
    selector: "author-list",
    providers: ["$location","authorActionCreator"]
})
@CanActivate([
    "authorActionCreator", "invokeAsync",
    (authorActionCreator: AuthorActionCreator, invokeAsync) => invokeAsync(authorActionCreator.all)
])
export class AuthorListComponent {
    constructor(private $location: angular.ILocationService,private authorActionCreator: AuthorActionCreator) { }
    storeOnChange = state =>  this.entities = state.authors;   
    entities;
    remove = author => this.authorActionCreator.remove({ entity: author });
    edit = author => this.authorActionCreator.edit({ entity: author });    
}
