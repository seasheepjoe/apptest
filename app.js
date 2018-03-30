var myApp = angular.module('apptest', [
    'ngRoute',
    'LocalStorageModule',
    'pascalprecht.translate'
]);

myApp.config(['$routeProvider',
    function routeProvider($routeProvider){
        $routeProvider.
        when('/', {
            templateUrl:'app/home/templates/home.html',
            controller:'homeController'
        }).
        when('/user/login/', {
            templateUrl:'app/user/templates/login.html',
            controller:'loginController'
        }).
        when('/user/profile/', {
            templateUrl:'app/user/templates/profile.html',
            controller:'profileController'
        }).
        otherwise({
            redirectTo:'/'
        });
    }
]).run(function($rootScope, localStorageService, $location, userEntity){
    $rootScope.$on("$routeChangeStart", function() {
        if ($location.path() !== '/user/login/' && !userEntity.isSignedIn()) {
            $location.path('/user/login/');
        }

        if ($location.path() === '/user/login/' && userEntity.isSignedIn()) {
            $location.path('/');
        }
    });
});

myApp.config(function($translateProvider){
    $translateProvider.preferredLanguage('en');

    $translateProvider.useStaticFilesLoader({
        prefix:'translations/',
        suffix:'.json'
    });
});