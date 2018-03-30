angular.module('apptest').controller('loginController', ['$scope', 'userEntity', '$location', function($scope, userEntity, $location){
    $scope.submitLogin = function (form) {
        if(true === form.$valid) {
            userEntity.login($scope.username, '0102030405', 'toto@yopmail.com');
            return $location.path('/');
        }

        return alert('NOT GOOD');
    };
}]);