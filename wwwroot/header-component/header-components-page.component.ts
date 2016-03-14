import { CanActivate, Component } from "../core/component-decorators";
import { HeaderComponentActionCreator } from "./header-component.actions";

@Component({
    route:"/headerComponents",
    templateUrl: "wwwroot/header-component/header-components-page.component.html",
    selector: "header-components-page",
    providers: ["headerComponentActionCreator"]
})
@CanActivate([
    "headerComponentActionCreator", "invokeAsync",
    (headerComponentActionCreator: HeaderComponentActionCreator, invokeAsync) => invokeAsync(headerComponentActionCreator.all)
])
export class HeaderComponentsPageComponent { }
