var $dipper = $('.dipper');

$dipper.waypoint(function() {
	$dipper.addClass('js-dipper-animate');
}, { offset: '70%'});


new WOW().init();