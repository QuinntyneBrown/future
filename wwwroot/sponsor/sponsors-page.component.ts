import { CanActivate, Component } from "../core/component-decorators";
import { SponsorActionCreator } from "./sponsor.actions";

@Component({
    route:"/sponsors",
    templateUrl: "wwwroot/sponsor/sponsors-page.component.html",
    selector: "sponsors-page",
    providers: ["sponsorActionCreator"]
})
@CanActivate([
    "sponsorActionCreator", "invokeAsync",
    (sponsorActionCreator: SponsorActionCreator, invokeAsync) => invokeAsync(sponsorActionCreator.all)
])
export class SponsorsPageComponent { }
