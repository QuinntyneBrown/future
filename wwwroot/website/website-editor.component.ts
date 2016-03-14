import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./website.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/website/edit/:id",
    templateUrl: "wwwroot/website/website-editor.component.html",
    selector: "website-editor",
    providers: ["$location","$routeParams","websiteActionCreator","invokeAsync"]
})
@CanActivate(["$q", "$route", "invokeAsync", "websiteActionCreator", ($q: angular.IQService, $route, invokeAsync, websiteActionCreator: actions.WebsiteActionCreator) => {
    var id = $route.current.params.id;
    return $q.all([
        invokeAsync({ action: websiteActionCreator.getById, params: { id: id } }),
        invokeAsync(websiteActionCreator.all)
    ]);
}])
export class WebsiteEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private websiteActionCreator: actions.WebsiteActionCreator, private invokeAsync) { }

    storeOnChange = state => {
        this.entities = state.websites;
        if (state.lastTriggeredByAction instanceof actions.RemoveWebsiteAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["id"]), items: this.entities });
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["id"]) {
            this.entity = pluck({ value: Number(this.$routeParams["id"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.websiteActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.entity = {} }

    remove = () => this.websiteActionCreator.remove({ entity: this.entity });
         
    id;
	name;
    entity;
    entities;
    baseUrl;
}
