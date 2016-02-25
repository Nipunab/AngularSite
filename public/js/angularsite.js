var siteApp = angular.module('siteApp', ['ngRoute', 'firebase']);
siteApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'partials/HomePage.html', controller: 'HomePageController'})
        .when('/projects', {templateUrl: 'partials/Projects.html', controller: 'ProjectsController'})
        // .when('/blogs', {templateUrl: 'partials/Blog.html', controller: 'BlogsController'})
        .when('/discussions', {templateUrl: 'partials/Discussions.html', controller: 'DiscussionsController'})
        .when('/coe', {templateUrl: 'partials/COE.html', controller: 'COEController'})
        .when('/trainings', {templateUrl: 'partials/Trainings.html', controller: 'TrainingsController'})
        .when('/projects/blogs', {templateUrl: 'partials/Blog.html', controller: 'BlogsController'})
        .when('/projects/:projectname', {
            templateUrl: 'partials/ProjectDetails.html',
            controller: 'ProjetListController'
        })

        .otherwise({redirectTo: '/home'});
}]);
siteApp.controller('HomePageController', function ($scope) {
    $scope.message = 'This is Homepage screen';
});
siteApp.controller('ProjetListController', function ($scope, $routeParams) {

    console.log("selected project is ", $routeParams.projectname);
});

var makeRequest = function (url, method, data) {
    angular.element('body').injector().get('$http')({
        method: method,
        url: url,
        data: data
    }).then(function (dt) {
        console.log(dt);
    }).catch(function () {
        console.log('ERR');
    });
};

var getProjects = function ($http, $scope) {
    $http({method: "GET", url: "http://localhost:5654/table/projects"}).then(function (projectResponse) {
        $scope.Projects = projectResponse.data.Body.list;
    }, function () {
        console.log("SErver not responding!!");
    });
};

var addProject = function (data) {
    angular.element('body').injector().get('$http')({
        method: "POST",
        url: "http://localhost:5654/table/projects",
        data: {"Name": data["Name"], "Manager": data["Manager"] }
    }).then(function (dt) {
        console.log(dt);
    }).catch(function () {
        console.log('ERR');
    });
};

//e.g:-  addEmployee({ "FName": "Nipuna"});
//checkout db/lib/models.js for Properties mentioned for Employee table
var addEmployee = function (data) {
    angular.element('body').injector().get('$http')({
        method: "POST",
        url: "http://localhost:5654/table/employee",
        data: {"FName": data["FName"], "LName": data["LName"] }
    }).then(function (dt) {
        console.log(dt);
    }).catch(function () {
        console.log('ERR');
    });
};

//e.g:- deleteProject({ "Id": "d32erewrwerewrerwer"})
var deleteProject = function (data) {
    angular.element('body').injector().get('$http')({
        method: "DELETE",
        url: "http://localhost:5654/table/projects?Id=" + data["Id"]
    }).then(function (dt) {
        console.log(dt);
    }).catch(function () {
        console.log('ERR');
    });
};

siteApp.controller('ProjectsController', function ($scope, $http) {
    $scope.Projects = [];

    getProjects($http, $scope);

    $scope.IsProjectVisible = false;
    $scope.ShowProjectList = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsProjectVisible = $scope.IsProjectVisible ? false : true;
    };

    //$scope.AddProject = function () {
    //    addProject($http, "Intermec");
    //};
});


siteApp.controller('BlogsController', function ($scope) {

});
siteApp.controller('DiscussionsController', ['$scope', 'Message', function ($scope, Message, $routeParams) {

    $scope.user = "Guest";

    $scope.messages = Message.all;

    $scope.inserting = function (message) {
        Message.create(message);
    };
}]);
siteApp.factory('Message', ['$firebase',
    function ($firebase) {
        var ref = new Firebase('https://tachatapp.firebaseIO.com');
        var messages = $firebase(ref.child('messages')).$asArray();

        var Message = {
            all: messages,
            create: function (message) {
                return messages.$add(message);
            },
            get: function (messageId) {
                return $firebase(ref.child('messages').child(messageId)).$asObject();
            },
            delete: function (message) {
                return messages.$remove(message);
            }
        };

        return Message;

    }
]);


siteApp.controller('COEController', function ($scope) {
    $scope.IsCOEVisible = false;
    $scope.ShowCOEList = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsCOEVisible = $scope.IsCOEVisible ? false : true;
    }
});
siteApp.controller('TrainingsController', function ($scope) {
    $scope.TrainingsVisible = false;
    $scope.ShowPractiseList = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.TrainingsVisible = $scope.TrainingsVisible ? false : true;
    }
});

siteApp.directive('sideNav', function () {
    return {
        restrict: 'EA',
        scope: {},
        replace: true,
        templateUrl: 'partials/sidenav.html'
    };
});