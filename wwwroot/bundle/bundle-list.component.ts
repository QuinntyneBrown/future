import { CanActivate, Component } from "../core/component-decorators";
import { BundleActionCreator } from "./bundle.actions";

@Component({
    route: "/bundle/list",
    templateUrl: "wwwroot/bundle/bundle-list.component.html",
    selector: "bundle-list",
    providers: ["$location","bundleActionCreator"]
})
@CanActivate([
    "bundleActionCreator", "invokeAsync",
    (bundleActionCreator: BundleActionCreator, invokeAsync) => invokeAsync(bundleActionCreator.all)
])
export class BundleListComponent {
    constructor(private $location: angular.ILocationService,private bundleActionCreator: BundleActionCreator) { }
    storeOnChange = state =>  this.entities = state.bundles;   
    entities;
    remove = bundle => this.bundleActionCreator.remove({ entity: bundle });
    edit = bundle => this.bundleActionCreator.edit({ entity: bundle });    
}
