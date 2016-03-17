angular.module('siteApp').controller('DiscussionController', ['$scope', 'Message', '$rootScope', function ($scope, Message, $rootScope) {

    $scope.messages = Message.all;

    $scope.inserting = function (message) {
        message.user = $rootScope.Username;
        Message.create(message);
    };
}]);
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