import { CanActivate, Component } from "../core/component-decorators";
import { TabsActionCreator } from "./tabs.actions";

@Component({
    templateUrl: "wwwroot/tabs/tabs.component.html",
    selector: "tabs",
    providers: ["tabsActionCreator"]
})
export class TabsComponent {
    constructor(private tabsActionCreator: TabsActionCreator) { }
  
}
