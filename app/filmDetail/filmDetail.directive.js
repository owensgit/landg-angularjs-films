(function () {
    "use strict";

    var controllerName = "FilmDetailCtrl";

    var directiveFunc = function () {

        return {
            scope: {},
            templateUrl: "filmDetail/filmDetail.template.html",
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
        $routeParams,
        filmsService) {



        $scope.data = filmsService[$routeParams.id] ||

        filmsService.getFilms().then(function (data) {
            var match;
            data.forEach(function (film) {
                if (film.id == $routeParams.id) {
                    match = film
                }
            });
            $scope.data = match || data[0];
        });

        

    };

    var controller = [
        "$rootScope",
        "$scope",
        "$routeParams",
        "films.core.filmsService",
        ctrlFunc
    ];

    var module = angular.module("filmList");
    module.directive("filmDetail", directive);
    module.controller(controllerName, controller);

})();