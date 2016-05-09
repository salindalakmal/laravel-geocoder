var app = angular.module('tzPoints', [
    'ngRoute',
    'ngAnimate'
])
        .constant('API_URL', 'http://localhost/tzhotels/public/api/v1/');

app.config(['$routeProvider', 'API_URL', function($routeProvider) {
        $routeProvider.
                when('/list', {
                    templateUrl: 'app/views/list.html',
                    controller: 'ListController'
                }).
                when('/details/:hotelId', {
                    templateUrl: 'app/views/details.html',
                    controller: 'DetailsController'
                }).
                otherwise({
                    redirectTo: '/list'
                });
    }]);