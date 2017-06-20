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


        filmsService.getFilms().then(function (data) {
            $scope.films = data;
        });

        $scope.showFilmDetail = function (filmId) {
            
            return false;
        };

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