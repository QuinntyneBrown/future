import { CanActivate, Component } from "../core/component-decorators";
import { ProviderActionCreator } from "./provider.actions";

@Component({
    route: "/provider/list",
    templateUrl: "wwwroot/provider/provider-list.component.html",
    selector: "provider-list",
    providers: ["$location","providerActionCreator"]
})
@CanActivate([
    "providerActionCreator", "invokeAsync",
    (providerActionCreator: ProviderActionCreator, invokeAsync) => invokeAsync(providerActionCreator.all)
])
export class ProviderListComponent {
    constructor(private $location: angular.ILocationService,private providerActionCreator: ProviderActionCreator) { }
    storeOnChange = state =>  this.entities = state.providers;   
    entities;
    remove = provider => this.providerActionCreator.remove({ entity: provider });
    edit = provider => this.providerActionCreator.edit({ entity: provider });    
}
