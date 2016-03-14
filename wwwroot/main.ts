require("./core/core.module");
require("./router-outlet/router-outlet.module");

require("./app/app.module");
require("./backdrop/backdrop.module");
require("./button/button.module");

require("./component/component.module");

require("./customer/customer.module");
require("./header/header.module");
require("./tabs/tabs.module");
require("./login/login.module");
require("./modal/modal.module");
require("./registration/registration.module");
require("./website/website.module");

require("./home-page/home-page.module");
require("./admin-page/admin-page.module");

var app: any = angular.module("future", [
    "app.core",
    "app.routerOutlet",

    "app.app",
    "app.backdrop",
    "app.button",
    "app.component",
    "app.customer",
    "app.header",
    "app.tabs",
    "app.login",
    "app.modal",
    "app.registration",
    "app.website",

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
        .when("/register", { template: "<registration-page></registration>" })
        .when("/websites", { template: "<websites-page></websites-page>" })
        .when("/website/edit/:id", { template: "<websites-page></websites-page>" })
        .when("/login", { template: "<login></login>" });
}]);

app.config(["apiEndpointProvider", (apiEndpointProvider) => {
    apiEndpointProvider.configure("/api");
}]);

