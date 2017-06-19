(function () {
    var app = angular.module("films.core");

    var service = function (
        $rootScope,
        $http) {


        var getFilms = function () {
            
        };

        return {
            getFilms: getFilms
        }

    };

    var factory = [
        "$rootScope",
        "$http",
        service
    ];

    app.factory('films.core.filmsService', factory);
})()