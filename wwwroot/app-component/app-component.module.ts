require("../core/core.module");

import { AppComponentEditorComponent } from "./app-component-editor.component";
import { AppComponentListComponent } from "./app-component-list.component";
import { AppComponentComponent } from "./app-component.component";
import { AppComponentsPageComponent } from "./app-components-page.component";
import { AppComponentActionCreator } from "./app-component.actions";
import { AppComponentService } from "./app-component.service";
import *  as reducers from "./app-component.reducers";

var app = (<any>angular.module("app.appComponent", [
    "app.core"    
]));

app.service("appComponentActionCreator",["$location","dispatcher","appComponentService","guid",AppComponentActionCreator]);
app.service("appComponentService",["$q","apiEndpoint","fetch",AppComponentService]);
app.component(AppComponentEditorComponent);
app.component(AppComponentListComponent);
app.component(AppComponentComponent);
app.component(AppComponentsPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
