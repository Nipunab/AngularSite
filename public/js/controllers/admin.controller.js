angular.module('siteApp').controller('adminCntl', function ($scope, Message, $rootScope, api) {
    $scope.safeApply = function (fn) {
        var phase = this.$root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };


    $scope.IsProjectsLoading = true;
    $scope.Projects = [];
    api.getProjects().then(function (projects) {
        $scope.Projects = projects;
        $scope.IsProjectsLoading = false;
    });

    $scope.IsPractiseLoading = true;
    $scope.Practises = [];
    api.getPractise().then(function (practises) {
        $scope.Practises = practises;
        $scope.IsPractiseLoading = false;
    });


    $scope.IsEmployeeLoading = true;
    $scope.Employees = [];

    $scope.NewEmployee = {};
    $scope.NewEmployee.UserType = "USER";
    api.getEmployee().then(function (Employees) {
        $scope.Employees = Employees;
        $scope.IsEmployeeLoading = false;
    });

    $scope.addItem = function (typ, itemToAdd) {
        var addPromise = null;
        var uid = getCookieVal('uid');
        if(uid){
            itemToAdd.CreatedBy = uid;
        }
        switch (typ) {
            case 'PROJECT':
                addPromise = api.addProject(itemToAdd);
                break;
            case 'PRACTISE':
                break;
            case 'EMPLOYEE':
                addPromise = api.addEmployee(itemToAdd);
                break;
        }

        if(addPromise){
            addPromise.then(function (addedItem) {
                if(addedItem) {
                    $scope.safeApply(function () {
                        switch (typ) {
                            case 'PROJECT':
                                $scope.Projects.push(addedItem);
                                break;
                            case 'PRACTISE':
                                break;
                            case 'EMPLOYEE':
                                if(addedItem.Id) {
                                    $scope.Employees.push(addedItem);
                                }else{
                                    //empoyee not added, either service down or permission denied
                                    console.log("you can't add employee ", addedItem.Msg);
                                }
                                break;
                        }
                    });

                }
            });
        }
    };

    $scope.deleteItem = function (typ, item) {
        var deletePromise = null;
        if(item.Id) {
            switch (typ) {
                case 'PROJECT':
                    deletePromise = api.deleteProject(item);
                    break;
                case 'PRACTISE':
                    break;
                case 'EMPLOYEE':
                    break;
            }
        }

        if(deletePromise){
            deletePromise.then(function () {
                switch (typ) {
                    case 'PROJECT':
                        $scope.safeApply(function () {
                            _.remove($scope.Projects, {Id: item.Id});
                        });
                        break;
                    case 'PRACTISE':
                        break;
                    case 'EMPLOYEE':
                        break;
                }
            });
        }
    };


});