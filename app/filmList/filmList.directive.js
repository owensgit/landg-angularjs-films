(function () {
    "use strict";

    var controllerName = "FilmListCtrl";

    var directiveFunc = function (
        ) {

        return {
            scope: {},
            templateUrl: "filmList/filmList.template.html",
            replace: true,
            controller: controllerName,
            controllerAs: "crtl",
            bindToController: true
        };
    };

    var directive = [
        directiveFunc
    ];

    var ctrlFunc = function(
        $rootScope,
        $scope,
        filmsService) {

        var getFilms = function () {
            filmsService.getFilms().then(function (data) {
                $scope.films = data;
            });
        };

        getFilms();

        return {
            getFilms: getFilms
        }

    };

    var controller = [
        "$rootScope",
        "$scope",
        "films.core.filmsService",
        ctrlFunc
    ];

    var module = angular.module("filmList");
    module.directive("filmList", directive);
    module.controller(controllerName, controller);

})();