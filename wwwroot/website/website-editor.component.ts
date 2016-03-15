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
            if (Object.keys(this.entity).length === 0) { this.websiteActionCreator.currentWebsiteRemoved(); }
        }
        
        if (state.lastTriggeredByAction instanceof actions.AddOrUpdateWebsiteSuccessAction)
            this.entity = {
                routes: [],
                components: []
            };
    }

    ngOnInit = () => {
        if (this.$routeParams["id"]) {
            this.entity = pluck({ value: Number(this.$routeParams["id"]), items: this.entities });
        } else {
            this.entity = {
                routes: [],
                components: []
            };
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.websiteActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => {
            this.websiteActionCreator.addOrUpdateWebsiteSuccess({ entity: this.entity });
        });
    } 
    
    create = () => {
        this.entity = {
            routes: [],
            components: []
        };
    }

    remove = () => this.websiteActionCreator.remove({ entity: this.entity });
         
    entity: any = {
        routes: [],
        components: []
    };

    entities;
    baseUrl;
}
