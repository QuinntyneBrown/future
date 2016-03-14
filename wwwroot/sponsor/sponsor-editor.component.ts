import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./sponsor.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/sponsor/edit/:sponsorId",
    templateUrl: "wwwroot/sponsor/sponsor-editor.component.html",
    selector: "sponsor-editor",
    providers: ["$location","$routeParams","sponsorActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "sponsorActionCreator", ($q: angular.IQService, $route, invokeAsync, sponsorActionCreator: actions.SponsorActionCreator) => {
    var id = $route.current.params.sponsorId;
    return $q.all([
        invokeAsync({ action: sponsorActionCreator.getById, params: { id: id } }),
        invokeAsync(sponsorActionCreator.all)
    ]);
}])
export class SponsorEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private sponsorActionCreator: actions.SponsorActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.sponsors; 
		if (state.lastTriggeredByAction instanceof actions.RemoveSponsorAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["sponsorId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["sponsorId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["sponsorId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.sponsorActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.sponsorActionCreator.create(); }

    remove = () => this.sponsorActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
