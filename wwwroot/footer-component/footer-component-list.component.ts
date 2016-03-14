import { CanActivate, Component } from "../core/component-decorators";
import { FooterComponentActionCreator } from "./footer-component.actions";

@Component({
    route: "/footerComponent/list",
    templateUrl: "wwwroot/footer-component/footer-component-list.component.html",
    selector: "footer-component-list",
    providers: ["$location","footerComponentActionCreator"]
})
@CanActivate([
    "footerComponentActionCreator", "invokeAsync",
    (footerComponentActionCreator: FooterComponentActionCreator, invokeAsync) => invokeAsync(footerComponentActionCreator.all)
])
export class FooterComponentListComponent {
    constructor(private $location: angular.ILocationService,private footerComponentActionCreator: FooterComponentActionCreator) { }
    storeOnChange = state =>  this.entities = state.footerComponents;   
    entities;
    remove = footerComponent => this.footerComponentActionCreator.remove({ entity: footerComponent });
    edit = footerComponent => this.footerComponentActionCreator.edit({ entity: footerComponent });    
}
