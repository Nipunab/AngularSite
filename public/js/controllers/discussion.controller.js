angular.module('siteApp').controller('DiscussionController', function ($scope, Message, $rootScope,api) {

    $scope.messages = Message.all;

    $scope.inserting = function (message) {
        message.user = $rootScope.Username;
        Message.create(message);
    };
//code for modal popup
   $scope.add = function () {
    // var comobj={
    //    Comments:dcomment,
    //     ParentId:$routeParams.qnId

    //   };
    //   api.addDiscussion(comobj).then(function(){
    //      $scope.answer='';
    //      api.getDiscussion().then(function(resp){
    //          console.log(resp);
    //          $scope.list.push({ answer: $scope.answer});
    //          var ans=resp.data.Body.list;
    //          $scope.list=_.filter(ans,function(res){
    //               return res.ParentId==$routeParams.qnId;
    //          });
    //      });
    //  });
                  if (angular.isDefined($scope.name) && $scope.name != '') 
                  {
                        // ADD A NEW ELEMENT.
                    $scope.list.push({ name: $scope.name});

                       // CLEAR THE FIELDS.
                      $scope.name = ''; 
                  }
    }
//code for modal popup
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