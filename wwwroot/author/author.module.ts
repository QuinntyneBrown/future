require("../core/core.module");

import { AuthorEditorComponent } from "./author-editor.component";
import { AuthorListComponent } from "./author-list.component";
import { AuthorComponent } from "./author.component";
import { AuthorsPageComponent } from "./authors-page.component";
import { AuthorActionCreator } from "./author.actions";
import { AuthorService } from "./author.service";
import *  as reducers from "./author.reducers";

var app = (<any>angular.module("app.author", [
    "app.core"    
]));

app.service("authorActionCreator",["$location","dispatcher","authorService","guid",AuthorActionCreator]);
app.service("authorService",["$q","apiEndpoint","fetch",AuthorService]);
app.component(AuthorEditorComponent);
app.component(AuthorListComponent);
app.component(AuthorComponent);
app.component(AuthorsPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
