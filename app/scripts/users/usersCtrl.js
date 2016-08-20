'use strict';

/**
 * @ngdoc function
 * @name teamBuildingApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the teamBuildingApp
 */
angular.module('teamBuildingApp').controller('UsersController', function ($scope) {
	this.user={};
	
	$scope.deleteUser=function(idPassedFromNgClick){
		//delete from the list of users
		for(var i=0;i<$scope.userList.length;i++){
    		if($scope.userList[i].id===idPassedFromNgClick){
    			$scope.userList.splice(i,1);
    			break;
    		}
		}
		
		//Also delete fom the relational list
		Loop1:
		for(var i=0;i<$scope.teamUsers.length;i++){
			for(var j=0;j<$scope.teamUsers[i].usersId.length;j++){
				if($scope.teamUsers[i].usersId[j]===idPassedFromNgClick){
					$scope.teamUsers[i].usersId.splice(j,1);
					break Loop1;
				}
			}
		}
	}
	
	this.save=function(){
		$scope.userList.unshift(this.user);
		this.user={};
	}
	
  });

angular.module('teamBuildingApp').directive('usersList', function(){
	return {
		restrict: "A",
	    templateUrl: 'views/user_list.html',
	    controller: 'UsersController',
	    controllerAs: 'ctrl'
	    };	
});
