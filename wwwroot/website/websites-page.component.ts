import { CanActivate, Component } from "../core/component-decorators";
import { WebsiteActionCreator } from "./website.actions";

@Component({
    route:"/websites",
    templateUrl: "wwwroot/website/websites-page.component.html",
    selector: "websites-page",
    providers: ["websiteActionCreator"]
})
@CanActivate([
    "websiteActionCreator", "invokeAsync",
    (websiteActionCreator: WebsiteActionCreator, invokeAsync) => invokeAsync(websiteActionCreator.all)
])
export class WebsitesPageComponent { }
