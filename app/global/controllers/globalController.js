angular.module('apptest').controller('globalController', ['$scope', 'userEntity', '$location', '$translate', function($scope, userEntity, $location, $translate){
    $scope.logoutUser = function() {
        userEntity.logout();
        $location.path('/user/login');
    };

    $scope.isSignedIn = function() {
        return userEntity.isSignedIn();
    };

    $scope.getUser = function() {
        return userEntity.getUser();
    };

    $scope.setLang = function(lang){
        $translate.use(lang);
    };

}]);