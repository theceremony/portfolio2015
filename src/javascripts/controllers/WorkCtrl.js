'use strict';

 var WorkCtrl = function($scope,$routeParams,$filter) {
	console.log('WorkCtrl start');
	// more soon
	// ----------
	//var obj = $filter('filter')($scope.projects, {projectId:$routeParams.projectId});

	

	

	$scope.displayProjectById = function(id){
		console.log(id);
	}
	console.log($scope.getJobById($routeParams.projectId));

	$scope.title = "yo bro";
};

// WorkCtrl.$inject = ["$scope", "$routeParams"];
module.exports = WorkCtrl;