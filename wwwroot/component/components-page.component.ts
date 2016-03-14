import { CanActivate, Component } from "../core/component-decorators";
import { ComponentActionCreator } from "./component.actions";

@Component({
    route:"/components",
    templateUrl: "wwwroot/component/components-page.component.html",
    selector: "components-page",
    providers: ["componentActionCreator"]
})
@CanActivate([
    "componentActionCreator", "invokeAsync",
    (componentActionCreator: ComponentActionCreator, invokeAsync) => invokeAsync(componentActionCreator.all)
])
export class ComponentsPageComponent { }
