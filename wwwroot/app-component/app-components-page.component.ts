import { CanActivate, Component } from "../core/component-decorators";
import { AppComponentActionCreator } from "./app-component.actions";

@Component({
    route:"/appComponents",
    templateUrl: "wwwroot/app-component/app-components-page.component.html",
    selector: "app-components-page",
    providers: ["appComponentActionCreator"]
})
@CanActivate([
    "appComponentActionCreator", "invokeAsync",
    (appComponentActionCreator: AppComponentActionCreator, invokeAsync) => invokeAsync(appComponentActionCreator.all)
])
export class AppComponentsPageComponent { }
