require("../core/core.module");

import { MetaDataEditorComponent } from "./meta-data-editor.component";
import { MetaDataListComponent } from "./meta-data-list.component";
import { MetaDataComponent } from "./meta-data.component";
import { MetaDatasPageComponent } from "./meta-datas-page.component";
import { MetaDataActionCreator } from "./meta-data.actions";
import { MetaDataService } from "./meta-data.service";
import *  as reducers from "./meta-data.reducers";

var app = (<any>angular.module("app.metaData", [
    "app.core"    
]));

app.service("metaDataActionCreator",["$location","dispatcher","metaDataService","guid",MetaDataActionCreator]);
app.service("metaDataService",["$q","apiEndpoint","fetch",MetaDataService]);
app.component(MetaDataEditorComponent);
app.component(MetaDataListComponent);
app.component(MetaDataComponent);
app.component(MetaDatasPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
