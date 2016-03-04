angular.module('siteApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'partials/HomePage.html', controller: 'HomePageController'})
        .when('/projects', {templateUrl: 'partials/Projects.html', controller: 'ProjectsController'})
        .when('/coe', {templateUrl: 'partials/COE.html', controller: 'COEController'})
        .when('/trainings', {templateUrl: 'partials/Trainings.html', controller: 'TrainingsController'})
       .when('/discussions', {templateUrl: 'partials/Discussions.html', controller: 'DiscussionController'})

        .when('/projects/blogs', {templateUrl: 'partials/Blog.html', controller: 'BlogsController', resolve:{
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
         
        
          .when('/trainings/documents', {
              templateUrl: 'partials/fileupload.html', controller: 'DocumentsController', resolve: {
                 pageType: function () {
                   return 'TRAININGS';
                }
           }
        })
        .when('/trainings/blogs', {templateUrl: 'partials/Blog.html', controller: 'BlogsController', resolve: {
                 pageType: function () {
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

           .when('/coe/:practisename', {
            templateUrl: 'partials/PractiseDetails.html',
            controller: 'PractiseDetailController',
            resolve: {
                pageType: function () {
                    return 'COE';
                }
            }
        })

               .when('/trainings/:trainingname', {
            templateUrl: 'partials/TrainingDetails.html',
            controller: 'TrainingDetailController',
            resolve: {
                pageType: function () {
                    return 'TRAININGS';
                }
            }
        })

        .otherwise({redirectTo: '/home'});
}]);