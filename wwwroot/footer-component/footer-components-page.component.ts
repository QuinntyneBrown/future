import { CanActivate, Component } from "../core/component-decorators";
import { FooterComponentActionCreator } from "./footer-component.actions";

@Component({
    route:"/footerComponents",
    templateUrl: "wwwroot/footer-component/footer-components-page.component.html",
    selector: "footer-components-page",
    providers: ["footerComponentActionCreator"]
})
@CanActivate([
    "footerComponentActionCreator", "invokeAsync",
    (footerComponentActionCreator: FooterComponentActionCreator, invokeAsync) => invokeAsync(footerComponentActionCreator.all)
])
export class FooterComponentsPageComponent { }
