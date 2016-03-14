import { CanActivate, Component } from "../core/component-decorators";
import { FooterComponentActionCreator } from "./footer-component.actions";

@Component({
    templateUrl: "wwwroot/footer-component/footer-component.component.html",
    selector: "footer-component",
    providers: ["footerComponentActionCreator"]
})
export class FooterComponentComponent {
    constructor(private footerComponentActionCreator: FooterComponentActionCreator) { }
  
}
