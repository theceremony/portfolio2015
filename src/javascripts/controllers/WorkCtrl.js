'use strict';

 var WorkCtrl = function($scope,$routeParams,$filter) {
	// ------------------------------------------------------------
	if($routeParams.hasOwnProperty('projectId')){
		$scope.project = $filter('filter')($scope.projects,{projectId:$routeParams.projectId})[0];
		$("body").addClass('work-visible');

	}else{
		$("body").removeClass('work-visible');
	}
};
module.exports = WorkCtrl;