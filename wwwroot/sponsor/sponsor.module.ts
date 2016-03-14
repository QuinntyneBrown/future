require("../core/core.module");

import { SponsorEditorComponent } from "./sponsor-editor.component";
import { SponsorListComponent } from "./sponsor-list.component";
import { SponsorComponent } from "./sponsor.component";
import { SponsorsPageComponent } from "./sponsors-page.component";
import { SponsorActionCreator } from "./sponsor.actions";
import { SponsorService } from "./sponsor.service";
import *  as reducers from "./sponsor.reducers";

var app = (<any>angular.module("app.sponsor", [
    "app.core"    
]));

app.service("sponsorActionCreator",["$location","dispatcher","sponsorService","guid",SponsorActionCreator]);
app.service("sponsorService",["$q","apiEndpoint","fetch",SponsorService]);
app.component(SponsorEditorComponent);
app.component(SponsorListComponent);
app.component(SponsorComponent);
app.component(SponsorsPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
