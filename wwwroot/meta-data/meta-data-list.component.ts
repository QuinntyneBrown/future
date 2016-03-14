import { CanActivate, Component } from "../core/component-decorators";
import { MetaDataActionCreator } from "./meta-data.actions";

@Component({
    route: "/metaData/list",
    templateUrl: "wwwroot/meta-data/meta-data-list.component.html",
    selector: "meta-data-list",
    providers: ["$location","metaDataActionCreator"]
})
@CanActivate([
    "metaDataActionCreator", "invokeAsync",
    (metaDataActionCreator: MetaDataActionCreator, invokeAsync) => invokeAsync(metaDataActionCreator.all)
])
export class MetaDataListComponent {
    constructor(private $location: angular.ILocationService,private metaDataActionCreator: MetaDataActionCreator) { }
    storeOnChange = state =>  this.entities = state.metaDatas;   
    entities;
    remove = metaData => this.metaDataActionCreator.remove({ entity: metaData });
    edit = metaData => this.metaDataActionCreator.edit({ entity: metaData });    
}
