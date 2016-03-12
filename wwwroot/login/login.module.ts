require("../core/core.module");

import { LoginComponent } from "./login.component";
import { LoginActionCreator } from "./login.actions";
import { LoginService } from "./login.service";
import *  as reducers from "./login.reducers";

var app = (<any>angular.module("app.login", [
    "app.core"    
]));

app.service("loginActionCreator",["$location","dispatcher","loginService","guid",LoginActionCreator]);
app.service("loginService",["$q","apiEndpoint","fetch",LoginService]);
app.component(LoginComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
