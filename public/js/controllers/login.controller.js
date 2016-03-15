  angular.module('siteApp').controller('LoginController', function ($scope, nkService, $location, $rootScope) {

    console.log('login page dude!!!');
    $scope.IsLogin = true;

    $scope.User = {"Username": "", "Password": "", "CPassword": ""};

    $scope.showRegisterForm = function () {
        $scope.IsLogin = false;
    };

    $rootScope.safeApply = function (fn) {
        var phase = this.$root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $scope.authenticateUser = function () {
        nkService.getUsers().then(function (resp) {
            var users = resp.data.Body.list;

            var loggedInUser = _.filter(users, {"Username": $scope.User.Username, "Password": $scope.User.Password});
            if (loggedInUser.length > 0) {
                document.cookie = "user-Id=" + loggedInUser[0].Id;
                $rootScope.safeApply(function () {
                    $location.path('/');
                });
            }
        });
    };


    $scope.addUser = function () {
        nkService.addUser($scope.User).then(function () {
            $scope.IsLogin = true;
            $scope.User = {"Username": "", "Password": "", "CPassword": ""};


        });
    };

});


  siteApp.service('nkService', function ($http) {
    var makeRequest = function (url, method, data) {
        var promise = $http({url: url, method: method, data: data});
        return promise;
    };

    this.addUser = function (userobj) {
        return makeRequest('http://localhost:5654/table/users', 'POST', userobj);
    };

    this.getUsers = function (userobj) {
        return makeRequest('http://localhost:5654/table/users', 'GET', {});
    };
});