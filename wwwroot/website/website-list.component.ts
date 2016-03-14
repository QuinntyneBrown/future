import { CanActivate, Component } from "../core/component-decorators";
import { WebsiteActionCreator } from "./website.actions";

@Component({
    route: "/website/list",
    templateUrl: "wwwroot/website/website-list.component.html",
    selector: "website-list",
    providers: ["websiteActionCreator"]
})
@CanActivate([
    "websiteActionCreator", "invokeAsync",
    (websiteActionCreator: WebsiteActionCreator, invokeAsync) => invokeAsync(websiteActionCreator.all)
])
export class WebsiteListComponent {
    constructor(private websiteActionCreator: WebsiteActionCreator) { }
    storeOnChange = state => this.entities = state.websites;      
    entities;
    remove = entity => this.websiteActionCreator.remove({ entity: entity });
    edit = entity => this.websiteActionCreator.edit({ entity: entity });    
}
