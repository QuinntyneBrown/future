require("../core/core.module");

import { ProviderPickerComponentComponent } from "./provider-picker-component.component";
import { ProviderPickerComponentActionCreator } from "./provider-picker-component.actions";
import { ProviderPickerComponentService } from "./provider-picker-component.service";
import *  as reducers from "./provider-picker-component.reducers";

var app = (<any>angular.module("app.providerPickerComponent", [
    "app.core"    
]));

app.service("providerPickerComponentActionCreator",["$location","dispatcher","providerPickerComponentService","guid",ProviderPickerComponentActionCreator]);
app.service("providerPickerComponentService",["$q","apiEndpoint","fetch",ProviderPickerComponentService]);
app.component(ProviderPickerComponentComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
