import { CanActivate, Component } from "../core/component-decorators";
import { ProviderActionCreator } from "./provider.actions";

@Component({
    templateUrl: "wwwroot/provider/provider.component.html",
    selector: "provider",
    providers: ["providerActionCreator"]
})
export class ProviderComponent {
    constructor(private providerActionCreator: ProviderActionCreator) { }
  
}
