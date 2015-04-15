'use strict';

module.exports = function($scope,$window,$filter,hoverProject) {
 	
	$scope.showBackground = function(project){
		// console.log('show background');
		// console.log('finally!',project);

		if($scope.backgroundContainer != undefined){
			$scope.stage.removeChild($scope.backgroundContainer);
		}
		$scope.backgroundContainer = new createjs.Container();
		$scope.backgroundContainer.rotation = -30;

		var img = new Image();
			img.onload = function(){
				$scope.stage.update();
			}
			img.src = 'img/work/' + project.mediaFolder + '/thumb.jpg';


		var backgroundImg = new createjs.Bitmap(img);
				

		var rows = 20;
		var cols = 20;
		var w = 590;
		var h = 367;

		var totalWidth = rows * w,
			totalHeight = cols * h;

		for(var r = 0; r < rows; ++r){
			for(var c = 0; c < cols; ++c){
				var b = backgroundImg.clone();
				b.x = w * r;
				b.y = h * c;
				$scope.backgroundContainer.addChild(b);
			}
		}
		$scope.backgroundContainer.scaleX =
		$scope.backgroundContainer.scaleY = .8;

		$scope.backgroundContainer.alpha = .3;
		
		$scope.backgroundContainer.regX = totalWidth * .5;
		$scope.backgroundContainer.regY = totalHeight * .5;
		$scope.backgroundContainer.x = $scope.stage.width * .5;
		$scope.backgroundContainer.y = $scope.stage.height * .5;

		$scope.stage.addChild($scope.backgroundContainer);
		$scope.stage.update();
	}
	$scope.hideBackground = function(project){
		$scope.stage.removeChild($scope.backgroundContainer);
		$scope.stage.update();
	}
	$scope.$on('hoverProject:unset', function(event,project) {
		$scope.hideBackground();
	});
	$scope.$on('hoverProject:updated', function(event,project) {
		$scope.showBackground (project);
	});
};