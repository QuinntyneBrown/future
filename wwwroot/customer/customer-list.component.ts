import { CanActivate, Component } from "../core/component-decorators";
import { CustomerActionCreator } from "./customer.actions";

@Component({
    route: "/customer/list",
    templateUrl: "wwwroot/customer/customer-list.component.html",
    selector: "customer-list",
    providers: ["$location","customerActionCreator"]
})
@CanActivate([
    "customerActionCreator", "invokeAsync",
    (customerActionCreator: CustomerActionCreator, invokeAsync) => invokeAsync(customerActionCreator.all)
])
export class CustomerListComponent {
    constructor(private $location: angular.ILocationService,private customerActionCreator: CustomerActionCreator) { }
    storeOnChange = state =>  this.entities = state.customers;   
    entities;
    remove = customer => this.customerActionCreator.remove({ entity: customer });
    edit = customer => this.customerActionCreator.edit({ entity: customer });    
}
