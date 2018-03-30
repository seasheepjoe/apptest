angular.module('apptest').directive('phone', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elt, attrs, ctrl){
            ctrl.$parsers.unshift(checkPhone);
            var PHONE_REGEX = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
            function checkPhone(viewValue) {
                ctrl.$setValidity('phone', PHONE_REGEX.test(viewValue));
                return viewValue;
            }
        }
    }
}]);