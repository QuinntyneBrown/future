import { CanActivate, Component } from "../core/component-decorators";
import { ProviderActionCreator } from "./provider.actions";

@Component({
    route:"/providers",
    templateUrl: "wwwroot/provider/providers-page.component.html",
    selector: "providers-page",
    providers: ["providerActionCreator"]
})
@CanActivate([
    "providerActionCreator", "invokeAsync",
    (providerActionCreator: ProviderActionCreator, invokeAsync) => invokeAsync(providerActionCreator.all)
])
export class ProvidersPageComponent { }
