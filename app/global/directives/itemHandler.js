angular.module('apptest').directive('itemHandler', ['$timeout', function($timeout){
    return {
        restrict: 'EA',
        link: function (scope, element) {
            var itemBtn = element.find('button');
            var inputElement = element.find('input');

            itemBtn.on('click', function () {

                $timeout(function(){
                    if (inputElement.val()) {
                        scope.items.push(inputElement.val());
                        inputElement.val('');
                    }
                });
            });
        }
    }
}]);