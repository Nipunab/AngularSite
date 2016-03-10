angular.module('siteApp').controller('DocumentsController', function ($scope,$http, pageType, fchnkUpload) {
    $scope.pageType = pageType;
    console.log("page Type ", pageType);


    $scope.uploadFiles = function (evt) {
        var files = $.makeArray(evt.target.files);
        console.log("file are ", files);
        evt.target.value = null;
        var renderFiles = function () {

        };

        var renderChunks = function () {

        };

        fchnkUpload.upload(files, renderFiles, renderChunks);
    };

});