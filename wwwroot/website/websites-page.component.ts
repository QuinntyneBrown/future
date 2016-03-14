import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./website.actions";

@Component({
    route:"/websites",
    templateUrl: "wwwroot/website/websites-page.component.html",
    selector: "websites-page",
    providers: ["$location","websiteActionCreator"]
})
@CanActivate([
    "websiteActionCreator", "invokeAsync",
    (websiteActionCreator: actions.WebsiteActionCreator, invokeAsync) => invokeAsync(websiteActionCreator.all)
])
export class WebsitesPageComponent {
    constructor(private $location: angular.ILocationService, websiteActionCreator: actions.WebsiteActionCreator) { }

    storeOnChange = state => {        
        if (state.lastTriggeredByAction instanceof actions.SetCurrentWebsiteAction) {
            this.$location.path("/website/edit/" + state.lastTriggeredByAction.entity.id);
        }
    }
}
