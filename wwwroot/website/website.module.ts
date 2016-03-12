require("../core/core.module");

import { WebsiteEditorComponent } from "./website-editor.component";
import { WebsiteListComponent } from "./website-list.component";
import { WebsiteComponent } from "./website.component";
import { WebsiteActionCreator } from "./website.actions";
import { WebsiteService } from "./website.service";
import *  as reducers from "./website.reducers";

var app = (<any>angular.module("app.website", [
    "app.core"    
]));

app.service("websiteActionCreator",["$location","dispatcher","websiteService","guid",WebsiteActionCreator]);
app.service("websiteService",["$q","apiEndpoint","fetch",WebsiteService]);
app.component(WebsiteEditorComponent);
app.component(WebsiteListComponent);
app.component(WebsiteComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
