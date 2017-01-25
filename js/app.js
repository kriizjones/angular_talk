var demoApp = angular.module("demoApp", []);

angular.module("demoApp").directive("sayHello", function () {
    return {
        scope: false,
        link: function ($scope, element, attrs) {
            $scope.message = attrs.message;
        },
        template: "<h1> {{[message, user.firstName, user.lastName].join(' ')}}!</h1>"
    };
});

(function () {
    angular.module("demoApp").directive("sayHello", function () {
        return {
            scope: false,
            link: function ($scope, element, attrs) {
                $scope.message = attrs.message;
            },
            template: "<h1> {{[message, user.firstName, user.lastName].join(' ')}}!</h1>"
        };
    });
})();

(function () {
    'use strict';
    angular
        .module("demoApp")
        .filter('sortByFirstName', function () {
                return function (array) {
                    function compare(a, b) {
                        return a.firstName.localeCompare(b.firstName)
                    }
                    return array.sort(compare);
                }
            }
        );
})();

(function () {
    'use strict';
    angular
        .module("demoApp")
        .controller("mainController", mainController);

    function mainController($scope, userService) {
        $scope.users = userService.users();
        $scope.newUser = {}
        $scope.addUser = function () {
            userService.add($scope.newUser);
        }
    }
})();