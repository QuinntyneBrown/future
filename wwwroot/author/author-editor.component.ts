import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./author.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/author/edit/:authorId",
    templateUrl: "wwwroot/author/author-editor.component.html",
    selector: "author-editor",
    providers: ["$location","$routeParams","authorActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "authorActionCreator", ($q: angular.IQService, $route, invokeAsync, authorActionCreator: actions.AuthorActionCreator) => {
    var id = $route.current.params.authorId;
    return $q.all([
        invokeAsync({ action: authorActionCreator.getById, params: { id: id } }),
        invokeAsync(authorActionCreator.all)
    ]);
}])
export class AuthorEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private authorActionCreator: actions.AuthorActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.authors; 
		if (state.lastTriggeredByAction instanceof actions.RemoveAuthorAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["authorId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["authorId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["authorId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.authorActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.authorActionCreator.create(); }

    remove = () => this.authorActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
