import { CanActivate, Component } from "../core/component-decorators";
import { WebsiteActionCreator } from "./website.actions";

@Component({
    templateUrl: "wwwroot/website/website.component.html",
    selector: "website",
    providers: ["websiteActionCreator"]
})
export class WebsiteComponent {
    constructor(private websiteActionCreator: WebsiteActionCreator) { }
  
}
