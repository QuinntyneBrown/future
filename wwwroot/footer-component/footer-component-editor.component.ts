import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./footer-component.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/footer-component/edit/:footerComponentId",
    templateUrl: "wwwroot/footer-component/footer-component-editor.component.html",
    selector: "footer-component-editor",
    providers: ["$location","$routeParams","footerComponentActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "footerComponentActionCreator", ($q: angular.IQService, $route, invokeAsync, footerComponentActionCreator: actions.FooterComponentActionCreator) => {
    var id = $route.current.params.footerComponentId;
    return $q.all([
        invokeAsync({ action: footerComponentActionCreator.getById, params: { id: id } }),
        invokeAsync(footerComponentActionCreator.all)
    ]);
}])
export class FooterComponentEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private footerComponentActionCreator: actions.FooterComponentActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.footerComponents; 
		if (state.lastTriggeredByAction instanceof actions.RemoveFooterComponentAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["footerComponentId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["footerComponentId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["footerComponentId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.footerComponentActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.footerComponentActionCreator.create(); }

    remove = () => this.footerComponentActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
