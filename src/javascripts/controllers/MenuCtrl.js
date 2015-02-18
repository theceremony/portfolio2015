'use strict';

module.exports = function($scope,$http) {
	$scope.workMenuClass = "hidden";
	$http.get("./bin/data/projects.json")
	.then(function(res){
		console.log(res);
		$scope.projects = res.data;
	});
	$scope.getWorkMenuClass = function(){ return $scope.workMenuClass; }
};
