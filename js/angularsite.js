var siteApp = angular.module('siteApp', ['ngRoute']);
siteApp.config(['$routeProvider' , function ($routeProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'partials/HomePage.html', controller: 'HomePageController'})
         .when('/projects', {templateUrl: 'partials/Projects.html', controller: 'ProjectsController'})
          .when('/coe', {templateUrl: 'partials/COE.html', controller: 'COEController'})
           .when('/trainings', {templateUrl: 'partials/Trainings.html', controller: 'TrainingsController'})
        .otherwise({redirectTo: '/home'});   
}]);
siteApp.controller('HomePageController',function($scope){
			$scope.message='This is Homepage screen';
		});
siteApp.controller('ProjectsController',function($scope){
			$scope.message='This is Homepage screen';
		});
siteApp.controller('COEController',function($scope){
			$scope.message='This is Homepage screen';
		});
siteApp.controller('TrainingsController',function($scope){
			$scope.message='This is Homepage screen';
		});
