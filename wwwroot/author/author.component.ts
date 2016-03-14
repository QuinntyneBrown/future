import { CanActivate, Component } from "../core/component-decorators";
import { AuthorActionCreator } from "./author.actions";

@Component({
    templateUrl: "wwwroot/author/author.component.html",
    selector: "author",
    providers: ["authorActionCreator"]
})
export class AuthorComponent {
    constructor(private authorActionCreator: AuthorActionCreator) { }
  
}
