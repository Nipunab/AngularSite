var servicesapp=angular.module('servicesapp',[]);

servicesapp.service('ProfileService',function(){

	var uid=1;
	var contacts=[{
		id:0,
		'name':'nipuna',
		'email':'abc@def.com',
		'phone':'123-345-6789'
	}];
	this.save=function(contact){
		if(contact.id==null){
			contact.id=uid++;
			contacts.push(contact);
		}
		else{
			for(i in contacts){
				if(contacts[i].id==contact.id){
					contacts[i]=contact;
				}
			}
		}
	}
	this.get=function(id){
		for(i in contacts){
			if(contacts[i].id==id){
				return contacts[i];
			}
		}
	}
	this.delete=function(id){
		for(i in contacts){
			if(contacts[i].id==id){
				contacts.splice(i,1);
			}
		}
	}
	this.list=function(){
		return contacts;
	}
});

servicesapp.controller('ProfileController',function($scope, ProfileService){
	$scope.contacts=ProfileService.list();
	$scope.saveContact=function(){
		ProfileService.save($scope.newcontact);
		$scope.newcontact={};
	}
	$scope.delete=function(id){
		ProfileService.delete(id);
		if($scope.newcontact.id==id)
			$scope.newcontact={};
	}
	$scope.edit=function(id){
		$scope.newcontact=angular.copy(ProfileService.get(id));
	}
})