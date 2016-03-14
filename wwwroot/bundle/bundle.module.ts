require("../core/core.module");

import { BundleEditorComponent } from "./bundle-editor.component";
import { BundleListComponent } from "./bundle-list.component";
import { BundleComponent } from "./bundle.component";
import { BundlesPageComponent } from "./bundles-page.component";
import { BundleActionCreator } from "./bundle.actions";
import { BundleService } from "./bundle.service";
import *  as reducers from "./bundle.reducers";

var app = (<any>angular.module("app.bundle", [
    "app.core"    
]));

app.service("bundleActionCreator",["$location","dispatcher","bundleService","guid",BundleActionCreator]);
app.service("bundleService",["$q","apiEndpoint","fetch",BundleService]);
app.component(BundleEditorComponent);
app.component(BundleListComponent);
app.component(BundleComponent);
app.component(BundlesPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
