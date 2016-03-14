import { CanActivate, Component } from "../core/component-decorators";
import { WebsiteActionCreator } from "./website.actions";

@Component({
    route: "/website/list",
    templateUrl: "wwwroot/website/website-list.component.html",
    selector: "website-list",
    providers: ["$location","websiteActionCreator"]
})
@CanActivate([
    "websiteActionCreator", "invokeAsync",
    (websiteActionCreator: WebsiteActionCreator, invokeAsync) => invokeAsync(websiteActionCreator.all)
])
export class WebsiteListComponent {
    constructor(private $location: angular.ILocationService,private websiteActionCreator: WebsiteActionCreator) { }
    storeOnChange = state => {
        this.entities = state.websites;
        console.log(state.websites.length);
    };   
    entities;
    remove = website => this.websiteActionCreator.remove({ entity: website });
    edit = website => this.websiteActionCreator.edit({ entity: website });    
}
