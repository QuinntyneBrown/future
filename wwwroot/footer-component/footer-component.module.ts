require("../core/core.module");

import { FooterComponentEditorComponent } from "./footer-component-editor.component";
import { FooterComponentListComponent } from "./footer-component-list.component";
import { FooterComponentComponent } from "./footer-component.component";
import { FooterComponentsPageComponent } from "./footer-components-page.component";
import { FooterComponentActionCreator } from "./footer-component.actions";
import { FooterComponentService } from "./footer-component.service";
import *  as reducers from "./footer-component.reducers";

var app = (<any>angular.module("app.footerComponent", [
    "app.core"    
]));

app.service("footerComponentActionCreator",["$location","dispatcher","footerComponentService","guid",FooterComponentActionCreator]);
app.service("footerComponentService",["$q","apiEndpoint","fetch",FooterComponentService]);
app.component(FooterComponentEditorComponent);
app.component(FooterComponentListComponent);
app.component(FooterComponentComponent);
app.component(FooterComponentsPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
