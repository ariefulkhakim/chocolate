
		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1500);
			e.preventDefault();
		});

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.menu-top').addClass('menu-shrink');
      } else {
        $('.menu-top').removeClass('menu-shrink');
      }
    });

		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});

			function HeroHeight() {
			$('.heightfull').height($(window).height());
		}

		$('.slideshow').backstretch([
			'assets/images/home-1.jpg',
			'assets/images/home-2.jpg',
			'assets/images/home-3.jpg'
		], {duration: 3000, fade: 600});

		
		$('.intro-slider').owlCarousel({
			paginationSpeed: 600,
			pagination: false,
			navigation: false,
			singleItem: true,
			slideSpeed: 600,
			autoPlay: 3000
		});