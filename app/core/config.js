(function () {
    "use strict";

    var module = angular.module("films.core");

    module.constant("films.core.CONFIG", {
        "rootUrl": "/app/",
        "filmsApiURL": "data/films.json",
        "rootPagesUrl": "/pages/"
    });
})();