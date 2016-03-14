require("../core/core.module");

import { ProviderEditorComponent } from "./provider-editor.component";
import { ProviderListComponent } from "./provider-list.component";
import { ProviderComponent } from "./provider.component";
import { ProvidersPageComponent } from "./providers-page.component";
import { ProviderActionCreator } from "./provider.actions";
import { ProviderService } from "./provider.service";
import *  as reducers from "./provider.reducers";

var app = (<any>angular.module("app.provider", [
    "app.core"    
]));

app.service("providerActionCreator",["$location","dispatcher","providerService","guid",ProviderActionCreator]);
app.service("providerService",["$q","apiEndpoint","fetch",ProviderService]);
app.component(ProviderEditorComponent);
app.component(ProviderListComponent);
app.component(ProviderComponent);
app.component(ProvidersPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
