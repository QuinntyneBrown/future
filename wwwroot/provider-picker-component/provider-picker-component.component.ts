import { CanActivate, Component } from "../core/component-decorators";
import { ProviderPickerComponentActionCreator } from "./provider-picker-component.actions";

@Component({
    templateUrl: "wwwroot/provider-picker-component/provider-picker-component.component.html",
    selector: "provider-picker-component",
    providers: ["providerPickerComponentActionCreator"]
})
export class ProviderPickerComponentComponent {
    constructor(private providerPickerComponentActionCreator: ProviderPickerComponentActionCreator) { }
  
}
