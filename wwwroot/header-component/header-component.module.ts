require("../core/core.module");

import { HeaderComponentEditorComponent } from "./header-component-editor.component";
import { HeaderComponentListComponent } from "./header-component-list.component";
import { HeaderComponentComponent } from "./header-component.component";
import { HeaderComponentsPageComponent } from "./header-components-page.component";
import { HeaderComponentActionCreator } from "./header-component.actions";
import { HeaderComponentService } from "./header-component.service";
import *  as reducers from "./header-component.reducers";

var app = (<any>angular.module("app.headerComponent", [
    "app.core"    
]));

app.service("headerComponentActionCreator",["$location","dispatcher","headerComponentService","guid",HeaderComponentActionCreator]);
app.service("headerComponentService",["$q","apiEndpoint","fetch",HeaderComponentService]);
app.component(HeaderComponentEditorComponent);
app.component(HeaderComponentListComponent);
app.component(HeaderComponentComponent);
app.component(HeaderComponentsPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
