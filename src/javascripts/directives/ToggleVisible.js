'use strict';

module.exports = function(){
	return function($scope,element,attrs) {
		element.bind('click',function($event){
			$event.preventDefault();
			$(attrs.togglevisible).slideToggle(150);
			
			if(element.hasClass('active') == false){
				element.addClass('active');
			}else{
				element.removeClass('active');
			}
			console.log('isactive', element.hasClass('active'));
		});
	}
};
