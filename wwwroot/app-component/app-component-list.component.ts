import { CanActivate, Component } from "../core/component-decorators";
import { AppComponentActionCreator } from "./app-component.actions";

@Component({
    route: "/appComponent/list",
    templateUrl: "wwwroot/app-component/app-component-list.component.html",
    selector: "app-component-list",
    providers: ["$location","appComponentActionCreator"]
})
@CanActivate([
    "appComponentActionCreator", "invokeAsync",
    (appComponentActionCreator: AppComponentActionCreator, invokeAsync) => invokeAsync(appComponentActionCreator.all)
])
export class AppComponentListComponent {
    constructor(private $location: angular.ILocationService,private appComponentActionCreator: AppComponentActionCreator) { }
    storeOnChange = state =>  this.entities = state.appComponents;   
    entities;
    remove = appComponent => this.appComponentActionCreator.remove({ entity: appComponent });
    edit = appComponent => this.appComponentActionCreator.edit({ entity: appComponent });    
}
