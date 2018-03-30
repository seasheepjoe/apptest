angular.module('apptest').directive('code', function(){
    return {
        restrict: 'EA',
        link: function (scope, element) {
            var url = 'https://www.macobserver.com/wp-content/uploads/2017/10/code-2434271_1280-1200x630.jpg?x78820';
            element.replaceWith('<img src="'+url+'" width="150" height="100">');
        }
    }
});