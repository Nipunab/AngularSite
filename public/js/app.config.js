angular.module('siteApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'partials/HomePage.html', controller: 'HomePageController'})
        .when('/projects', {templateUrl: 'partials/Projects.html', controller: 'ProjectsController'})
        .when('/coe', {templateUrl: 'partials/COE.html', controller: 'COEController'})
        .when('/trainings', {templateUrl: 'partials/Trainings.html', controller: 'TrainingsController'})
       
        .when('/projects/blogs', {templateUrl: 'partials/Blog.html', controller: 'BlogsController', resolve:{
            pageType: function () {
                return 'PROJECT';
            }
        }})
        .when('/projects/discussions', {templateUrl: 'partials/Discussions.html', controller: 'DiscussionsController', resolve:{
            pageType: function () {
                return 'PROJECT';
            }
        }})
        .when('/projects/documents', {
            templateUrl: 'partials/fileupload.html', controller: 'DocumentsController', resolve: {
                pageType: function () {
                    return 'PROJECT';
                }
            }
        })

        .when('/coe/documents', {
            templateUrl: 'partials/fileupload.html', controller: 'DocumentsController', resolve: {
                pageType: function () {
                    return 'COE';
                }
            }
        })
        .when('/coe/blogs', {templateUrl: 'partials/Blog.html', controller: 'BlogsController', resolve:{
            pageType: function () {
                return 'COE';
            }
        }})
        .when('/coe/discussions', {templateUrl: 'partials/Discussions.html', controller: 'DiscussionsController', resolve:{
            pageType: function () {
                return 'COE';
            }
        }})
        
          .when('/trainings/documents', {
              templateUrl: 'partials/fileupload.html', controller: 'DocumentsController', resolve: {
                 pagetype: function () {
                   return 'TRAININGS';
                }
           }
        })
        .when('/trainings/blogs', {templateUrl: 'partials/Blog.html', controller: 'BlogsController', resolve: {
                 pagetype: function () {
                   return 'TRAININGS';
               }
            }
        })
        .when('/trainings/discussions', {templateUrl: 'partials/Discussions.html', controller: 'DiscussionsController', resolve: {
                 pagetype: function () {
                   return 'TRAININGS';
               }
             }
        })

        .when('/projects/:projectname', {
            templateUrl: 'partials/ProjectDetails.html',
            controller: 'ProjectDetailController',
            resolve: {
                pageType: function () {
                    return 'PROJECT';
                }
            }
        })

        .otherwise({redirectTo: '/home'});
}]);