require("../core/core.module");

import { ModalActionCreator } from "./modal.actions";
import { Modal } from "./modal.service";
import *  as reducers from "./modal.reducers";

var app = (<any>angular.module("app.modal", [
    "app.core"    
]));

app.service("modalActionCreator",["$location","dispatcher","modalService","guid",ModalActionCreator]);

app.service("modal", ["$compile","$location","$q", "$rootScope","store", Modal]);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

app.run(["modal", modal => { }]);
