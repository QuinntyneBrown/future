import { CanActivate, Component } from "../core/component-decorators";
import { HeaderComponentActionCreator } from "./header-component.actions";

@Component({
    route: "/headerComponent/list",
    templateUrl: "wwwroot/header-component/header-component-list.component.html",
    selector: "header-component-list",
    providers: ["$location","headerComponentActionCreator"]
})
@CanActivate([
    "headerComponentActionCreator", "invokeAsync",
    (headerComponentActionCreator: HeaderComponentActionCreator, invokeAsync) => invokeAsync(headerComponentActionCreator.all)
])
export class HeaderComponentListComponent {
    constructor(private $location: angular.ILocationService,private headerComponentActionCreator: HeaderComponentActionCreator) { }
    storeOnChange = state =>  this.entities = state.headerComponents;   
    entities;
    remove = headerComponent => this.headerComponentActionCreator.remove({ entity: headerComponent });
    edit = headerComponent => this.headerComponentActionCreator.edit({ entity: headerComponent });    
}
