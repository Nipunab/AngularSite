angular.module('siteApp').directive('sideNav', function ($http, $location) {
    return {
        restrict: 'E',
        controller:function($scope){
            $scope.Projects = [];

            getProjects($http, $scope);
            $scope.IsProjectVisible = false;
            $scope.ShowProjectList = function () {
                $scope.IsProjectVisible = $scope.IsProjectVisible ? false : true;
            };


            $scope.Practise = [];

            getPractise($http, $scope);
            $scope.IsCOEVisible = false;
            $scope.ShowCOEList = function () {
                $scope.IsCOEVisible = $scope.IsCOEVisible ? false : true;
            };

            $scope.navigateToPage = function (toPage, pageType) {
                switch (pageType){
                    case 'PROJECT':
                        $location.path('/projects/' + toPage);
                        break;
                    case 'COE':
                        $location.path('/coe/' + toPage);
                        break;
                }
            }

        },
        scope: {
            pageType: '@'
        },
        link: function (scope, element, attrs) {
            //scope.pageType = attrs.pageType;
        },
        replace: true,
        templateUrl: 'partials/sidenav.html'
    };
});