angular.module('apptest').controller('profileController', ['$scope', 'userEntity',  function ($scope, userEntity) {
    $scope.submitProfile = function (form) {
        if (form.$valid) {
            userEntity.login($scope.username, $scope.phone, $scope.email);
        }
    };
}]);