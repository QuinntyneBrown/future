require("../core/core.module");

import { RouteConfigurationEditorComponent } from "./route-configuration-editor.component";
import { RouteConfigurationListComponent } from "./route-configuration-list.component";
import { RouteConfigurationComponent } from "./route-configuration.component";
import { RouteConfigurationsPageComponent } from "./route-configurations-page.component";
import { RouteConfigurationActionCreator } from "./route-configuration.actions";
import { RouteConfigurationService } from "./route-configuration.service";
import *  as reducers from "./route-configuration.reducers";

var app = (<any>angular.module("app.routeConfiguration", [
    "app.core"    
]));

app.service("routeConfigurationActionCreator",["$location","dispatcher","routeConfigurationService","guid",RouteConfigurationActionCreator]);
app.service("routeConfigurationService",["$q","apiEndpoint","fetch",RouteConfigurationService]);
app.component(RouteConfigurationEditorComponent);
app.component(RouteConfigurationListComponent);
app.component(RouteConfigurationComponent);
app.component(RouteConfigurationsPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
