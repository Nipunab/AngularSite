var siteApp = angular.module('siteApp', ['ngRoute']);
siteApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'partials/HomePage.html', controller: 'HomePageController'})
         .when('/projects', {templateUrl: 'partials/Projects.html', controller: 'ProjectsController'})
          .when('/coe', {templateUrl: 'partials/COE.html', controller: 'COEController'})
           .when('/trainings', {templateUrl: 'partials/Trainings.html', controller: 'TrainingsController'})
           .when('/projects/:projectname', {templateUrl: 'partials/ProjectDetails.html', controller: 'ProjetListController'})
        .otherwise({redirectTo: '/home'});   
}]);
siteApp.controller('HomePageController',function($scope){
			$scope.message='This is Homepage screen'; 
		});
siteApp.controller('ProjetListController',function($scope,$routeParams){ 
			console.log("selected project is ",$routeParams.projectname);
		});
siteApp.controller('ProjectsController',function($scope){
			 $scope.IsProjectVisible = false;
            $scope.ShowProjectList = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsProjectVisible = $scope.IsProjectVisible ? false : true;
            }
		});
siteApp.controller('COEController',function($scope){ 
			 $scope.IsCOEVisible = false;
            $scope.ShowCOEList = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsCOEVisible = $scope.IsCOEVisible ? false : true;
            }
		});
siteApp.controller('TrainingsController',function($scope){
			 $scope.TrainingsVisible = false;
            $scope.ShowPractiseList = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.TrainingsVisible = $scope.TrainingsVisible ? false : true;
            }
		});
