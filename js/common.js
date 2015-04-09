head.ready(function() {

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

	$('.mobile__nav').click(function (e) {
		e.stopPropagation();
		$('.navigation__menu').toggleClass('is-visible');
	});

	$('body').click(function (e) {
		if($('.navigation__menu').hasClass('is-visible')){
			$('.navigation__menu')	.removeClass('is-visible');
		}
	});

});