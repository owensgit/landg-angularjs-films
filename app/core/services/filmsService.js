(function () {

    var service = function (
        $rootScope,
        $http,
        CONFIG) {

        var films = [];

        var getFilms = function (callback) {
            var req = {
                method: 'GET',
                url: CONFIG.filmsApiURL
            }
            var promise = $http(req).then(function (resp) {
                films = resp.data.films;
                return films;
            });

            return promise
        };

        return {
            getFilms: getFilms,
            films: films
        }

    };

    var factory = [
        "$rootScope",
        "$http",
        "films.core.CONFIG",
        service
    ];

    var module = angular.module("films.core");
    module.factory('films.core.filmsService', factory);

})();