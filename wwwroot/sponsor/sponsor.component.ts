import { CanActivate, Component } from "../core/component-decorators";
import { SponsorActionCreator } from "./sponsor.actions";

@Component({
    templateUrl: "wwwroot/sponsor/sponsor.component.html",
    selector: "sponsor",
    providers: ["sponsorActionCreator"]
})
export class SponsorComponent {
    constructor(private sponsorActionCreator: SponsorActionCreator) { }
  
}
