require("../core/core.module");

import { PhotoUploadComponent } from "./photo-upload.component";
import { PhotoUploadActionCreator } from "./photo-upload.actions";
import { PhotoUploadService } from "./photo-upload.service";
import *  as reducers from "./photo-upload.reducers";

var app = (<any>angular.module("app.photoUpload", [
    "app.core"    
]));

app.service("photoUploadActionCreator",["$location","dispatcher","photoUploadService","guid",PhotoUploadActionCreator]);
app.service("photoUploadService",["$q","apiEndpoint","fetch",PhotoUploadService]);
app.component(PhotoUploadComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
