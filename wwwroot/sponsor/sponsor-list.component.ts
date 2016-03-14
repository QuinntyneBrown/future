import { CanActivate, Component } from "../core/component-decorators";
import { SponsorActionCreator } from "./sponsor.actions";

@Component({
    route: "/sponsor/list",
    templateUrl: "wwwroot/sponsor/sponsor-list.component.html",
    selector: "sponsor-list",
    providers: ["$location","sponsorActionCreator"]
})
@CanActivate([
    "sponsorActionCreator", "invokeAsync",
    (sponsorActionCreator: SponsorActionCreator, invokeAsync) => invokeAsync(sponsorActionCreator.all)
])
export class SponsorListComponent {
    constructor(private $location: angular.ILocationService,private sponsorActionCreator: SponsorActionCreator) { }
    storeOnChange = state =>  this.entities = state.sponsors;   
    entities;
    remove = sponsor => this.sponsorActionCreator.remove({ entity: sponsor });
    edit = sponsor => this.sponsorActionCreator.edit({ entity: sponsor });    
}
