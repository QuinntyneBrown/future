import { CanActivate, Component } from "../core/component-decorators";
import { CustomerActionCreator } from "./customer.actions";

@Component({
    route:"/customers",
    templateUrl: "wwwroot/customer/customers-page.component.html",
    selector: "customers-page",
    providers: ["customerActionCreator"]
})
@CanActivate([
    "customerActionCreator", "invokeAsync",
    (customerActionCreator: CustomerActionCreator, invokeAsync) => invokeAsync(customerActionCreator.all)
])
export class CustomersPageComponent { }
