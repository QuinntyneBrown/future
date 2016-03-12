require("../core/core.module");

import { AdminPageComponent } from "./admin-page.component";
import { AdminPageActionCreator } from "./admin-page.actions";
import { AdminPageService } from "./admin-page.service";
import *  as reducers from "./admin-page.reducers";

var app = (<any>angular.module("app.adminPage", [
    "app.core"    
]));

app.service("adminPageActionCreator",["$location","dispatcher","adminPageService","guid",AdminPageActionCreator]);
app.service("adminPageService",["$q","apiEndpoint","fetch",AdminPageService]);
app.component(AdminPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
