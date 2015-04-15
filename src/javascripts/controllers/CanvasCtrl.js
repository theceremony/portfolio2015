'use strict';

module.exports = function($scope,$window,$filter,hoverProject) {
 	
	var rows = 25;
	var cols = 25;
	var w = 590;
	var h = 367;

	$scope.showBackground = function(project){
		if($scope.backgroundContainer != undefined){
			$scope.stage.removeChild($scope.backgroundContainer);
		}
		$scope.backgroundContainer = new createjs.Container();
		$scope.backgroundContainer.rotation = -30;

		var angle = (Math.PI / 180) * ($scope.backgroundContainer.rotation );

		var img = new Image();
			img.onload = function(){
				$scope.stage.update();
			}
			img.src = 'img/work/' + project.mediaFolder + '/thumb.jpg';


		var backgroundImg = new createjs.Bitmap(img);
				


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
		
		$scope.backgroundContainer.alpha = 0;
		createjs.Tween.get($scope.backgroundContainer,{override:true})
			.wait(500)
			.to({
				alpha:.3
			}, 200)
			.addEventListener("change", function(){
				$scope.stage.update();
			});

		createjs.Tween.get($scope.backgroundContainer,{loop:true})
			.to({
				//x:$scope.backgroundContainer.x + (w * Math.cos(angle)) + 22,
				x:$scope.backgroundContainer.x + (w * Math.cos(angle)) * 10,
				y:$scope.backgroundContainer.y + (h * Math.sin(angle)) * 10
				
			}, 100000)
			.addEventListener("change", function(){
				$scope.stage.update();
			})

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