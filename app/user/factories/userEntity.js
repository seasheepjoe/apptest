angular.module('apptest').factory('userEntity', ['localStorageService', function (localStorageService) {

    this.login = function (username, phone, email) {
        localStorageService.set('user', username);
        localStorageService.set('phone', phone);
        localStorageService.set('email', email);
    };

    this.logout = function () {
        localStorageService.clearAll();
    };

    this.isSignedIn = function () {
        return null !== this.getUser();
    };

    this.getUser = function () {
        return localStorageService.get('user');
    };

    return this;
}]);