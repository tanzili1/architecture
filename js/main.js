  (function($){
	'use strict'
	///* responsive menu

	$('.mobile-bar span').on('click', function(){

		$('.mobile-slide').slideToggle();
		$('.mobile-slide-overlay').fadeIn();
	});


	$(window).resize(function(){

		var june = $(window).width();

		if ( june > 991 ) {
			$('.mobile-slide').removeAttr('style');
		}


	});


	//wow js

	new WOW().init();
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animate__animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null,    // optional scroll container selector, otherwise use window,
	    resetAnimation: true,     // reset animation on end (default is true)
	  }
	);
	wow.init();


	//* owl carousel
	 $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,   
            navText:['<span><i class="fas fa-arrow-circle-left"></i></span>', '<span><i class="fas fa-arrow-circle-right"></i></span>'],       
            autoplay:true,
            autoplayTimeout:3500,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })



	
	


 
}) (jQuery);








