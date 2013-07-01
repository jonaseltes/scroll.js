$(window).load(function () {
	var $wall = $('#content');
	$wall.imagesLoaded(function () {
		$wall.masonry({
			itemSelector: '.post',
			isAnimated: false
		});
	});
	$wall.infinitescroll({
		navSelector: '#pagination',
		nextSelector: '#pagination li a.pagination_nextlink',
		itemSelector: '.post',
		loadingImg: "http://static.tumblr.com/kwz90l7/bIdlst7ub/transparent.png",
		loadingText: " ",
		donetext: " ",
		bufferPx: 100,
		debug: false,
		errorCallback: function () {
			$('#infscr-loading').animate({
				opacity: .8
			}, 2000).fadeOut('normal');
		}
	}, function (newElements) {
		var $newElems = $(newElements);
		$newElems.hide();
		$newElems.imagesLoaded(function () {
			$wall.masonry('appended', $newElems, {
				isAnimated: false,
				animationOptions: {
					duration: 900,
					easing: 'linear',
					queue: false
				}
			}, function () {
				$newElems.fadeIn('slow');
			});
		});
		$(document).ready(function () {
			 grid();
		});
	});
	$('#content').show(500);
});