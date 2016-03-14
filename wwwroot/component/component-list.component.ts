import { CanActivate, Component } from "../core/component-decorators";
import { ComponentActionCreator } from "./component.actions";

@Component({
    route: "/component/list",
    templateUrl: "wwwroot/component/component-list.component.html",
    selector: "component-list",
    providers: ["$location","componentActionCreator"]
})
@CanActivate([
    "componentActionCreator", "invokeAsync",
    (componentActionCreator: ComponentActionCreator, invokeAsync) => invokeAsync(componentActionCreator.all)
])
export class ComponentListComponent {
    constructor(private $location: angular.ILocationService,private componentActionCreator: ComponentActionCreator) { }
    storeOnChange = state =>  this.entities = state.components;   
    entities;
    remove = component => this.componentActionCreator.remove({ entity: component });
    edit = component => this.componentActionCreator.edit({ entity: component });    
}
