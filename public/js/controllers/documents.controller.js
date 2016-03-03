angular.module('siteApp').controller('DocumentsController', function ($scope,$http, pageType) {
    $scope.pageType = pageType;
    console.log("page Type ", pageType);
});