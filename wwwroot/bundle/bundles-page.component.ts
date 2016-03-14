import { CanActivate, Component } from "../core/component-decorators";
import { BundleActionCreator } from "./bundle.actions";

@Component({
    route:"/bundles",
    templateUrl: "wwwroot/bundle/bundles-page.component.html",
    selector: "bundles-page",
    providers: ["bundleActionCreator"]
})
@CanActivate([
    "bundleActionCreator", "invokeAsync",
    (bundleActionCreator: BundleActionCreator, invokeAsync) => invokeAsync(bundleActionCreator.all)
])
export class BundlesPageComponent { }
