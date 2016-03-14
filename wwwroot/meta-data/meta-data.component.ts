import { CanActivate, Component } from "../core/component-decorators";
import { MetaDataActionCreator } from "./meta-data.actions";

@Component({
    templateUrl: "wwwroot/meta-data/meta-data.component.html",
    selector: "meta-data",
    providers: ["metaDataActionCreator"]
})
export class MetaDataComponent {
    constructor(private metaDataActionCreator: MetaDataActionCreator) { }
  
}
