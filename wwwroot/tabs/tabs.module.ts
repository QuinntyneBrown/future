require("../core/core.module");

import { TabsComponent } from "./tabs.component";
import { TabsActionCreator } from "./tabs.actions";
import { TabsService } from "./tabs.service";
import *  as reducers from "./tabs.reducers";

var app = (<any>angular.module("app.tabs", [
    "app.core"    
]));

app.service("tabsActionCreator",["$location","dispatcher","tabsService","guid",TabsActionCreator]);
app.service("tabsService",["$q","apiEndpoint","fetch",TabsService]);
app.component(TabsComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
