import { CanActivate, Component } from "../core/component-decorators";
import { MetaDataActionCreator } from "./meta-data.actions";

@Component({
    route:"/metaDatas",
    templateUrl: "wwwroot/meta-data/meta-datas-page.component.html",
    selector: "meta-datas-page",
    providers: ["metaDataActionCreator"]
})
@CanActivate([
    "metaDataActionCreator", "invokeAsync",
    (metaDataActionCreator: MetaDataActionCreator, invokeAsync) => invokeAsync(metaDataActionCreator.all)
])
export class MetaDatasPageComponent { }
