import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./customer.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/customer/edit/:customerId",
    templateUrl: "wwwroot/customer/customer-editor.component.html",
    selector: "customer-editor",
    providers: ["$location","$routeParams","customerActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "customerActionCreator", ($q: angular.IQService, $route, invokeAsync, customerActionCreator: actions.CustomerActionCreator) => {
    var id = $route.current.params.customerId;
    return $q.all([
        invokeAsync({ action: customerActionCreator.getById, params: { id: id } }),
        invokeAsync(customerActionCreator.all)
    ]);
}])
export class CustomerEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private customerActionCreator: actions.CustomerActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.customers; 
		if (state.lastTriggeredByAction instanceof actions.RemoveCustomerAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["customerId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["customerId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["customerId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.customerActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.customerActionCreator.create(); }

    remove = () => this.customerActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
