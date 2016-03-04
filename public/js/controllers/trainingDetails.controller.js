angular.module('siteApp').controller('TrainingDetailController', function ($scope,$http, pageType, $routeParams) {
    $scope.pageType = pageType;

    $scope.TrainingName = $routeParams.trainingname;
});