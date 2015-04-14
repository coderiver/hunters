head.ready(function() {

	var clickEventType=((document.ontouchstart !== null) ?'click':'touchstart');

	//onresize
	$(window).resize(function() {
		$('.js-scroll').jScrollPane({
			showArrows: true,
			verticalDragMaxHeight: 20,
		});

		getData();

	});

	//fixed header
	$(window).scroll(function() {

	    var scroll = $(window).scrollTop();
	    if ($('.js-wrap').length > 0) {
	    	if (scroll >= $('.js-wrap').offset().top) {
	    	    $(".js-wrap").addClass("is-fixed");
	    	} else {
	    	    $(".js-wrap").removeClass("is-fixed");
	    	};
	    };
	});
	$(window).load(function() {
	    var scroll = $(window).scrollTop();
	    if ($('.js-wrap').length>0) {
	    	if (scroll >= $('.js-wrap').offset().top) {
	    	    $(".js-wrap").addClass("is-fixed");
	    	} else {
	    	    $(".js-wrap").removeClass("is-fixed");
	    	};
	    };
	});

	//sliders
	$('.main__slider .js-slick').slick({
		dots: true,
		slidesToShow: 1,
	});

	$('.photo__slider .js-slick').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		customPaging: function(slick , index) {
		    return '<div class="thumbs" style="background-image: url(img/photos/slide' + slick.$slides.eq(index).attr('data-number') + '.jpg)">' + '</div>';
		}
	});

	$('.photo__albums .js-slick').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		responsive: [
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: false
				}
			},
			{
				breakpoint: 475,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false
				}
			}
		]
	});

	function getData(){

		var slider = $('.photo__slider .js-slick');
		var album = $('.photo__albums').find('.slick-slide');

		album.on(clickEventType, function(){

			var filtered = false;
			var tab = $(this).attr('data-tab');

			if (filtered === false) {
				slider.slick('slickFilter', function(){
					return $(this).attr("data-number") !== tab;
				});
				filtered = true;
			}
		});
	}

	getData();

	// scroll for video section
	$('.js-scroll').jScrollPane({
		showArrows: true,
		verticalDragMaxHeight: 20,
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