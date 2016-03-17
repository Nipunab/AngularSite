angular.module('siteApp').directive('globalHeader', function ($rootScope, $location) {
    return {
        restrict: 'E',
        link: function ($scope, $el, attrs) {

        },
        controller: function ($scope, api) {
            $scope.IsAuthenticated = false;

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

            var lToken = getCookieVal('lToken');
            var uid = getCookieVal('uid');
            if (lToken && uid) {
                api.login().then(function (loginResp) {
                    if (loginResp.Status) {
                        $scope.IsAuthenticated = true;
                        api.getEmployee(uid).then(function (myprofile) {
                            if(myprofile && myprofile.length > 0){

                                if(myprofile[0].UserType.toUpperCase() === "ADMIN"){
                                    $rootScope.safeApply(function () {
                                        $rootScope.CurrentUser = myprofile[0];
                                        $location.path('/admin');
                                    });
                                }else{
                                    $rootScope.safeApply(function () {
                                        $rootScope.CurrentUser = myprofile[0];
                                        $location.path('/home');
                                    });
                                }
                            }else{
                                //user Details not available in DB
                            }
                        });
                    } else {
                        $scope.IsAuthenticated = false;
                        $rootScope.safeApply(function () {
                            $location.path('/login');

                        });
                    }
                });
            } else {
                $rootScope.safeApply(function () {
                    $location.path('/login');
                });
            }

            //listener on $rootScope event. event name is 'login-changed'
            $rootScope.$on('login-changed', function (er, rt) {
                $scope.IsAuthenticated = rt.IsAuthenticated;
            });

            $scope.logout = function () {
                document.cookie = "lToken=TOKEN";
                $scope.IsAuthenticated = false;
                $rootScope.safeApply(function () {
                    $location.path('/login');
                });
            };

        },
        scope: {
            //IsAuthenticated: "="
        },
        replace: true,
        templateUrl: 'partials/header.html'
    };
});