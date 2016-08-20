'use strict';

/**
 * @ngdoc function
 * @name teamBuildingApp.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the teamBuildingApp
 */
angular.module('teamBuildingApp').controller('TeamsController', function ($scope) {
	this.team={};
	
	$scope.propertyName = 'name';
	$scope.reverse = true;
	
	
	$scope.sortBy = function(propertyName) {
	    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
	    $scope.propertyName = propertyName;
	};
	
	$scope.deleteTeam=function(idPassedFromNgClick){
		console.log(idPassedFromNgClick);
		for(var i=0;i<$scope.teamList.length;i++){
    		if($scope.teamList[i].id===idPassedFromNgClick){
    			$scope.teamList.splice(i,1);
    			break;
    		}
		}
		
		for (var i=0;i<$scope.teamUsers.length;i++){
			if ($scope.teamUsers[i].teamId===idPassedFromNgClick){
				for (var j=0;j<$scope.teamUsers[i].usersId.length;j++){
					for(var k=0;k<$scope.userList.length;k++){
						if($scope.userList[k].id===$scope.teamUsers[i].usersId[j]){
							$scope.userList.splice(k,1);
							break;
						}
					}
				}
				$scope.teamUsers.splice(i,1);
			}
		}
	}
	
	this.save=function(){
		$scope.teamList.unshift(this.team);
		this.team={};
	}
  });

angular.module('teamBuildingApp').directive('teamsList', function(){
	return {
		restrict: "A",
	    templateUrl: 'views/team_list.html',
	    controller: 'TeamsController',
	    controllerAs: 'ctrl'
	    };	
});
