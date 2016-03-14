import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./photo.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/photo/edit/:photoId",
    templateUrl: "wwwroot/photo/photo-editor.component.html",
    selector: "photo-editor",
    providers: ["$location","$routeParams","photoActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "photoActionCreator", ($q: angular.IQService, $route, invokeAsync, photoActionCreator: actions.PhotoActionCreator) => {
    var id = $route.current.params.photoId;
    return $q.all([
        invokeAsync({ action: photoActionCreator.getById, params: { id: id } }),
        invokeAsync(photoActionCreator.all)
    ]);
}])
export class PhotoEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private photoActionCreator: actions.PhotoActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.photos; 
		if (state.lastTriggeredByAction instanceof actions.RemovePhotoAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["photoId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["photoId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["photoId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.photoActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.photoActionCreator.create(); }

    remove = () => this.photoActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
