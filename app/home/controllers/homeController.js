angular.module('apptest').controller('homeController', ['$scope', function($scope){
    $scope.user = 'Louis';
    $scope.message = 'Hey';

    $scope.items = ['oui', 'non', 'peut-être'];
}]);