import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./gallery.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/gallery/edit/:galleryId",
    templateUrl: "wwwroot/gallery/gallery-editor.component.html",
    selector: "gallery-editor",
    providers: ["$location","$routeParams","galleryActionCreator","invokeAsync"]
})
@CanActivate(["$q","$route", "invokeAsync", "galleryActionCreator", ($q: angular.IQService, $route, invokeAsync, galleryActionCreator: actions.GalleryActionCreator) => {
    var id = $route.current.params.galleryId;
    return $q.all([
        invokeAsync({ action: galleryActionCreator.getById, params: { id: id } }),
        invokeAsync(galleryActionCreator.all)
    ]);
}])
export class GalleryEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private galleryActionCreator: actions.GalleryActionCreator, private invokeAsync) { }

	storeOnChange = state => { 
		this.entities = state.gallerys; 
		if (state.lastTriggeredByAction instanceof actions.RemoveGalleryAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["galleryId"]), items: this.entities });
        }
	}

	ngOnInit = () => {
        if (this.$routeParams["galleryId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["galleryId"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.galleryActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { this.entity = {}; });
    } 
    
    create = () => { this.galleryActionCreator.create(); }

    remove = () => this.galleryActionCreator.remove({ entity: this.entity });
         
    id;
	name;
	entity;
	entities;
    baseUrl;
}
