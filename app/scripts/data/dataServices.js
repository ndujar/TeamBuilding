angular.module('teamBuildingApp').factory('dataService', function($http) {
	  var promise;
	  var httpService = {
	    async: function() {
	      if ( !promise ) {
	    	  // $http returns a promise, which has a then function, which also returns a promise
	    	  promise = $http.get('http://api.nobelprize.org/v1/prize.json', { cache: true }).then(function (response) {
	          // The then function here is an opportunity to modify the response
	          
	          // The return value gets picked up by the then in the controller.
	          return response.data;
	        });
	      }
	      // Return the promise to the controller
	      return promise;
	    }
	  };
	  return httpService;
	});
angular.module('teamBuildingApp').controller('dataController', function ($rootScope,dataService) {
	$rootScope.data=[]; 
	// Call the async method and then do stuff with what is returned inside our own then function
    dataService.async().then(function(data) {

    	//First let's create the table of users
    	var userList=[];
    	
	  	for(var i=0;i<data.prizes.length;i++){
	  		for(var j=0;j<data.prizes[i].laureates.length;j++){
		    	var user={id: data.prizes[i].laureates[j].id,
		    			firstName: data.prizes[i].laureates[j].firstname,
		    			surName: data.prizes[i].laureates[j].surname,
		    			team: data.prizes[i].category
		    			};
		    	userList.push(user);
	  		};
	  	};
	  		  	
	  	//Then the table of teams, and to make it faster, also the relation table
	  	var listed=false;
    	var id=1;
    	
    	var teamList=[{id: 0,
    				name: data.prizes[0].category}];
    	
    	var teamUsers=[{teamId: 0, 
    				usersId: []}];
    	
    	for(var i=0;i<data.prizes.length;i++){
    		for(var j=0;j<teamList.length;j++){
    			if(data.prizes[i].category===teamList[j].name){
    				listed=true;
    				for (var k=0;k<data.prizes[i].laureates.length;k++){
    					teamUsers[j].usersId.push(data.prizes[i].laureates[k].id);
    				};
    				break;
    			}else{
    				listed=false;
    			}
    		};
    		if (listed===false){
    			var team={id: id, 
    					name: data.prizes[i].category};    		
    			
		    	var users={teamId: id,
		    			usersId: []};
		    	
    			for (var k=0;k<data.prizes[i].laureates.length;k++){
					users.usersId.push(data.prizes[i].laureates[k].id);
				};
				
		    	teamList.push(team);	
		    	teamUsers.push(users);
    			id+=1;
    		};		    		
    	};
    	
    	$rootScope.userList=userList;
    	$rootScope.teamList=teamList;
    	$rootScope.teamUsers=teamUsers;
    });
  });
