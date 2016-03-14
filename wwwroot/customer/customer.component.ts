import { CanActivate, Component } from "../core/component-decorators";
import { CustomerActionCreator } from "./customer.actions";

@Component({
    templateUrl: "wwwroot/customer/customer.component.html",
    selector: "customer",
    providers: ["customerActionCreator"]
})
export class CustomerComponent {
    constructor(private customerActionCreator: CustomerActionCreator) { }
  
}
