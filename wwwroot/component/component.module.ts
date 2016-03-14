require("../core/core.module");

import { ComponentEditorComponent } from "./component-editor.component";
import { ComponentListComponent } from "./component-list.component";
import { ComponentComponent } from "./component.component";
import { ComponentsPageComponent } from "./components-page.component";
import { ComponentActionCreator } from "./component.actions";
import { ComponentService } from "./component.service";
import *  as reducers from "./component.reducers";

var app = (<any>angular.module("app.component", [
    "app.core"    
]));

app.service("componentActionCreator",["$location","dispatcher","componentService","guid",ComponentActionCreator]);
app.service("componentService",["$q","apiEndpoint","fetch",ComponentService]);
app.component(ComponentEditorComponent);
app.component(ComponentListComponent);
app.component(ComponentComponent);
app.component(ComponentsPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
