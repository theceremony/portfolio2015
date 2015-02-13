module.exports = function($scope,$http) {
	// $scope.items = [
	// 	{name:'Sony Seperated Together'},
	// 	{name:'Coke Wearable Movie'},
	// 	{name:'Coke Wearable Movie'},
	// 	{name:'Coke Wearable Movie'},
	// 	{name:'Coke Wearable Movie'},
	// ];

	$http.get("./bin/data/projects.json")
	.then(function(res){
		console.log(res);
		$scope.projects = res.data;
	});
};
