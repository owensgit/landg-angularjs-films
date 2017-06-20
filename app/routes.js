(function () {
    "use strict";

    var routes = {
        film: "/film"
    };

    var configFunc = function (
        $routeProvider,
        CONFIG) {

        var getTemplateUrl = function(page) {
            return CONFIG.rootPagesUrl + page;
        };

        $routeProvider
            .when(routes.film, {
                templateUrl: getTemplateUrl("film.html")
            })
            .when(routes.film+'/:id', {
                templateUrl: getTemplateUrl("film.html")
            })
            .otherwise({
                templateUrl: getTemplateUrl("film.html")
            });
    };

    var config = [
        "$routeProvider",
        "films.core.CONFIG",
        configFunc
    ];

    var module = angular.module("app");
    module.constant("ROUTES", routes);
    module.config(config);
})();