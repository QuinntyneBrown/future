require("../core/core.module");

import { PhotoGalleryComponentComponent } from "./photo-gallery-component.component";
import { PhotoGalleryComponentActionCreator } from "./photo-gallery-component.actions";
import { PhotoGalleryComponentService } from "./photo-gallery-component.service";
import *  as reducers from "./photo-gallery-component.reducers";

var app = (<any>angular.module("app.photoGalleryComponent", [
    "app.core"    
]));

app.service("photoGalleryComponentActionCreator",["$location","dispatcher","photoGalleryComponentService","guid",PhotoGalleryComponentActionCreator]);
app.service("photoGalleryComponentService",["$q","apiEndpoint","fetch",PhotoGalleryComponentService]);
app.component(PhotoGalleryComponentComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
