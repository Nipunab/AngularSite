var getProjects = function ($http, $scope) {
    $http({method: "GET", url: "http://localhost:5654/table/projects"}).then(function (projectResponse) {
        $scope.Projects = projectResponse.data.Body.list;
    }, function () {
        console.log("Server not responding!!");
    });
};

//e.g:-  addProject({ "Name": "Nipuna"});
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
var getPractise = function ($http, $scope) {
    $http({method: "GET", url: "http://localhost:5654/table/practise"}).then(function (practiseResponse) {
        $scope.Practise = practiseResponse.data.Body.list;
    }, function () {
        console.log("Server not responding!!");
    });
};
//e.g:-  addEmployee({ "FName": "Nipuna"});
//checkout db/lib/models.js for Properties mentioned for Employee table
var addPractise = function (data) {
    angular.element('body').injector().get('$http')({
        method: "POST",
        url: "http://localhost:5654/table/practise",
        data: {"PName": data["PName"]}
    }).then(function (dt) {
        console.log(dt);
    }).catch(function () {
        console.log('ERR');
    });
};
//e.g:- deleteProject({ "Id": "d32erewrwerewrerwer"})
var deletePractise = function (data) {
    angular.element('body').injector().get('$http')({
        method: "DELETE",
        url: "http://localhost:5654/table/practise?Id=" + data["Id"]
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
        data: {"FName": data["FName"],"LName":data["LName"],"EmpId":data["EmpId"],"JoinedDate":data["JoinedDate"]}
    }).then(function (dt) {
        console.log(dt);
    }).catch(function () {
        console.log('ERR');
    });
};

var getEmployee = function ($http, $scope) {
    $http({method: "GET", url: "http://localhost:5654/table/employee"}).then(function (employeeResponse) {
        $scope.Employee = employeeResponse.data.Body.list;
    }, function () {
        console.log("Server not responding!!");
    });
};
//e.g:- deleteProject({ "Id": "d32erewrwerewrerwer"})
var deleteEmployee = function (data) {
    angular.element('body').injector().get('$http')({
        method: "DELETE",
        url: "http://localhost:5654/table/employee?Id=" + data["Id"]
    }).then(function (dt) {
        console.log(dt);
    }).catch(function () {
        console.log('ERR');
    });
};
//e.g:-  addEmployee({ "FName": "Nipuna"});
//checkout db/lib/models.js for Properties mentioned for Employee table
var getTrainings = function ($http, $scope) {
    $http({method: "GET", url: "http://localhost:5654/table/trainings"}).then(function (trainingResponse) {
        $scope.Trainings = trainingResponse.data.Body.list;
    }, function () {
        console.log("Server not responding!!");
    });
};

var addTrainings = function (data) {
    angular.element('body').injector().get('$http')({
        method: "POST",
        url: "http://localhost:5654/table/trainings",
        data: {"TName": data["TName"]}
    }).then(function (dt) {
        console.log(dt);
    }).catch(function () {
        console.log('ERR');
    });
};
//e.g:- deleteProject({ "Id": "d32erewrwerewrerwer"})
var deleteTrainings = function (data) {
    angular.element('body').injector().get('$http')({
        method: "DELETE",
        url: "http://localhost:5654/table/trainings?Id=" + data["Id"]
    }).then(function (dt) {
        console.log(dt);
    }).catch(function () {
        console.log('ERR');
    });
};



