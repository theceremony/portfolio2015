'use strict';

 var WorkCtrl = function($scope,$routeParams,$filter) {
	// ------------------------------------------------------------
	if($routeParams.hasOwnProperty('projectId')){
		$scope.project = $filter('filter')($scope.projects,{projectId:$routeParams.projectId})[0];
		$("body").addClass('work-visible');
		$("section.header").addClass('collapsed');
	}else{
		$("body").removeClass('work-visible');
		$("section.header").removeClass('collapsed');
	}
};
module.exports = WorkCtrl;