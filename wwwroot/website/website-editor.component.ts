import { CanActivate, Component } from "../core/component-decorators";
import { WebsiteActionCreator } from "./website.actions";

@Component({
    route: "/website/edit/:id",
    templateUrl: "wwwroot/website/website-editor.component.html",
    selector: "website-editor",
    providers: ["$location","websiteActionCreator","invokeAsync"]
})
@CanActivate(["$route", "invokeAsync", "websiteActionCreator", ($route, invokeAsync, websiteActionCreator: WebsiteActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: websiteActionCreator.getById,
        params: { id: id }
    });
}])
export class WebsiteEditorComponent {
    constructor(private $location: angular.ILocationService, private websiteActionCreator: WebsiteActionCreator, private invokeAsync) { }

    storeOnChange = state => { }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.websiteActionCreator.addOrUpdate,
            params: {
                data: {
                    id: this.id,
                }
            }
        }).then(() => {
            if (!this.id && this.entities.filter(entity => entity.name === this.name).length > 0) {

            }
            else {

            }
        });
    } 
    
    create = () => {
        this.websiteActionCreator.create();
    }

    remove = () => this.websiteActionCreator.remove({ id: this.id });
         
    id;
	name;
	entities;
    baseUrl;
}
