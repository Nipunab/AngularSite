angular.module('siteApp').controller('DiscussionController', function ($scope, Message, $rootScope, api) {

    $scope.messages = Message.all;
    $scope.rating = 0;
    $scope.ratings = [{
        current: 3,
        max: 10
    }];

    $scope.maxRating = 10;

    $scope.modelProps = {list: [], msgId: 0};

    $scope.getSelectedRating = function (rating) {
        console.log('rating and model prop : ', rating);
        var itemToEdit = Message.get($scope.modelProps.msgId);
        if(itemToEdit){
            itemToEdit.rating = rating;
            itemToEdit.$save();
        }

    };
    $scope.inserting = function (message) {
        message.user = $rootScope.Username;
        message.rating = 3;
        Message.create(message);
    };

    $scope.openComments = function (msg) {
        $scope.modelProps.list = [];
        $scope.messages.forEach(function (cItem) {
            if (cItem.parentId && cItem.parentId == msg.$id) {
                cItem.rating = cItem.rating ? cItem.rating : 3;
                $scope.modelProps.list.push(cItem);
            }
        });
        $scope.modelProps.msgId = msg.$id;
        $('#myModal').modal('show');
    };


    $scope.add = function (commentToAdd) {
        if (angular.isDefined(commentToAdd.text) && commentToAdd.text != '') {
            // ADD A NEW ELEMENT.
            $scope.modelProps.list.push({text: commentToAdd.text});

            commentToAdd.user = $rootScope.Username;
            commentToAdd.rating = 3; //for now rating is defaulted to 3
            commentToAdd.parentId = $scope.modelProps.msgId;
            Message.create(commentToAdd);

            commentToAdd.text = '';
        }
    };


});
angular.module('siteApp').factory('Message', ['$firebase',
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

angular.module('siteApp').directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
        '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
        '\u2605' +
        '</li>' +
        '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                    rating: index + 1
                });
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});