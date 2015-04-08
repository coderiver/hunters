head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$('.js-slick').slick({
		dots: true,
		slidesToShow: 1
	});

	$('.js-scroll').jScrollPane({
		showArrows: true,
		verticalDragMaxHeight: 20,
	});

	$(window).resize(function() {
		$('.js-scroll').jScrollPane({
			showArrows: true,
			verticalDragMaxHeight: 20,
		});
	});

});