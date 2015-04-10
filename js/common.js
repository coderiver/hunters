head.ready(function() {

	//sliders
	$('.main__slider .js-slick').slick({
		dots: true,
		slidesToShow: 1,
	});

	$('.photo__slider .js-slick').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.photo__albums .js-slick').slick({
		slidesToShow: 3,
		slidesToScroll: 3
	});

	// function getData(){

	// 	var album = $('.photo__albums').find('.slide');
	// 	var slide = $('.photo__slider').find('.js-slick').children('img');

	// 	console.log(slide);

	// 	album.click(function () {

	// 		var y = $(this).attr('data-tab');
	// 		var x = slide.children().attr('data-number');

	// 	// if(x == y){
	// 	// 	slide.slick('slickFilter','data-number');
	// 	// }

	// 		console.log(x);
	// 	});

	// }

	// getData();


	// scroll for video section
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

	//navigation menu
	$('.mobile__nav').click(function (e) {
		e.stopPropagation();
		$('.navigation__menu').toggleClass('is-visible');
	});

	$('body').click(function (e) {
		if($('.navigation__menu').hasClass('is-visible')){
			$('.navigation__menu')  .removeClass('is-visible');
		}
	});

	//scrollTo
	$('.menu__link').click(function (i) {

		i.preventDefault();
		var idscroll = $(this).attr('href');
		$.scrollTo(idscroll, 800);
		console.log(idscroll);

	});

	//calendar
	$('.calendar').fullCalendar({
		header: {
			left: 'prev,next title',
			center: '',
			right: ''
		},
		eventLimit: true,
		eventRender: function(event, element){
			element.closest('.is-event').find(".fc-content").append('<img class="event__image" src="img/photos/news2.jpg" alt="news">');
			element.closest('.event-another').find(".fc-content").append('<img class="event__image" src="img/photos/attack.jpg" alt="attack">');
		},
		events: [
			{
				className: 'is-event',
				title: '',
				start: '2015-04-10',
				allDay: true
			},
			{
				className: 'event-another',
				title: '',
				start: '2015-04-20',
				allDay: true
			},
		]
	 });

});