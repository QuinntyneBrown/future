import { CanActivate, Component } from "../core/component-decorators";
import { BundleActionCreator } from "./bundle.actions";

@Component({
    templateUrl: "wwwroot/bundle/bundle.component.html",
    selector: "bundle",
    providers: ["bundleActionCreator"]
})
export class BundleComponent {
    constructor(private bundleActionCreator: BundleActionCreator) { }
  
}
