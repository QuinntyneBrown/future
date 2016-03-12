﻿require("./core/core.module");

require("./app/app.module");
require("./button/button.module");

require("./header/header.module");
require("./tabs/tabs.module");
require("./login/login.module");
require("./modal/modal.module");
require("./registration/registration.module");

require("./home-page/home-page.module");
require("./admin-page/admin-page.module");

var app: any = angular.module("future", [
    "app.core",

    "app.app",
    "app.button",
    "app.header",
    "app.tabs",
    "app.login",
    "app.modal",
    "app.registration",

    "app.adminPage",
    "app.homePage"
]);

app.config(["initialStateProvider", "localStorageManagerProvider", (initialStateProvider, localStorageManagerProvider) => {
    var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
    if (!localStorageInitialState)
        localStorageManagerProvider.put({
            name: "initialState", value: {
            }
        });

    initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));
}]);

app.config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
        .when("/", { template: "<home-page></home-page>" })
        .when("/admin", { template: "<admin-page></admin-page>" })
        .when("/registration", { template: "<registration></registration>" })
        .when("/login", { template: "<login></login>" });
}]);

