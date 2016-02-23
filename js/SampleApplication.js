var sampleApp=angular.module('sampleApp',['ngRoute','ngResource']);
		sampleApp.config(['$routeProvider',function($routeProvider){
				$routeProvider
					.when('/addneworder',{templateUrl:'pages/addneworder.html',controller:'AddOrderController'})
					.when('/showneworder',{templateUrl:'pages/showneworder.html',controller:'ShowOrderController'})
					.when('/login',{templateUrl:'pages/login.html',controller:'LoginController'})
					.when('/register',{templateUrl:'pages/register.html',controller:'RegisterController'})
					.otherwise({redirectTo:'/addneworder'});
			}]);
		sampleApp.controller('AddOrderController',function($scope){
			$scope.message='This is Add new order screen';
		});
		sampleApp.controller('ShowOrderController',function($scope){
			$scope.message='This is show new order screen';
		});
		sampleApp.controller('LoginController',function($scope){
			$scope.message='This is login screen';
		});
		sampleApp.controller('RegisterController',function($scope){
			$scope.message='This is Register screen';
		});
		// sampleApp.directive('customisedSample', function () {

  //           return {
		// 	    restrict: 'E',
		// 	    templateUrl: 'pages/custompartial/custom.html' 
  // 			 }
  // 		});
//ShowOrder details


  		sampleApp.filter('searchFor',function(){
  			return function(arr,searchString){
		 		if(!searchString){
		 			return arr;
		 		}
		 		var result=[];
		 		searchString=searchString.toLowerCase();
		 		angular.forEach(arr,function(item){
		 			if(item.title.toLowerCase().indexOf(searchString)!==-1){
		 				result.push(item);
		 			}
		 		});
		 		return result;
		 	};
  		});
  			 function InstantSearchController($scope){
		 	$scope.items=[
		 	{
		 		url:'http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
		 		title:'50 Must-have plugins for extending Twitter Bootstrap',
		 		image:'http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg'
		 	},
		 	{
			url: 'http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
			title: 'Making a Super Simple Registration System With PHP and MySQL',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/08/slideout-footer-css/',
			title: 'Create a slide-out footer with this neat z-index trick',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/06/digital-clock/',
			title: 'How to Make a Digital Clock with jQuery and CSS3',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/05/diagonal-fade-gallery/',
			title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/',
			title: 'Mini AJAX File Upload Form',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/04/services-chooser-backbone-js/',
			title: 'Your First Backbone.js App – Service Chooser',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg'
		}
	];
 }

 //Add new order details

sampleApp.factory('instagram', function($resource){

	return {
		fetchPopular: function(callback){

			// The ngResource module gives us the $resource service. It makes working with
			// AJAX easy. Here I am using the client_id of a test app. Replace it with yours.

			var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
				client_id: '642176ece1e7445e99244cec26f4de1f'
			},{
				// This creates an action which we've chosen to name "fetch". It issues
				// an JSONP request to the URL of the resource. JSONP requires that the
				// callback=JSON_CALLBACK part is added to the URL.

				fetch:{method:'JSONP'}
			});

			api.fetch(function(response){

				// Call the supplied callback function
				callback(response.data);

			});
		}
	}

});

// The controller. Notice that I've included our instagram service which we
// defined below. It will be available inside the function automatically.

function SwitchableGridController($scope, instagram){

	// Default layout of the app. Clicking the buttons in the toolbar
	// changes this value.

	$scope.layout = 'grid';

	$scope.pics = [];

	// Use the instagram service and fetch a list of the popular pics
	instagram.fetchPopular(function(data){

		// Assigning the pics array will cause the view
		// to be automatically redrawn by Angular.
		$scope.pics = data;
	});

}
