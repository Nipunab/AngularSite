var nbJsonDbApp = angular.module('nb-json-db', []);

nbJsonDbApp.service('nb-db-api', function () {
    this.Name = "Murali";

    var makeRequest = function (url, method, content, options) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                method: 'POST',
                data: content,
                complete: function (aResponse) {
                    resolve(aResponse);
                }
            });
        });

    };

    this.get = function (url, content, options) {
        var aObj = {};
        aObj.aName = "DB";
        aObj.aMethod = "POST";
        return makeRequest(url);
    };

    this.post = function () {
        return makeRequest(url);
    };

    this.delete = function () {
        return makeRequest(url);
    };

});