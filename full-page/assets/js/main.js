"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();



    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

//    $('.statistic-counter').counterUp({
//        delay: 10,
//        time: 2000
//    });

//    $('.statistic').counterUp({
//        delay: 10,
//        time: 2000
 //   });




    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

        var wow = new WOW({
            mobile: false // trigger animations on mobile devices (default is true)
        });
        wow.init();


    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.main_comments_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
	    nav:false,
	    navText: [
                    "<i class='lnr lnr-chevron-left'></i>",
                    "<i class='lnr lnr-chevron-right'></i>"
                ],
      autoplayHoverPause: true

    });



	
//	$('.chart').easyPieChart({
//		animate: 2000,
//           scaleColor: false,
//            lineWidth: 10,
//            lineCap: 'square',
//            size: 130,
//            trackColor: false,
//           barColor: '#498af3',
//            onStep: function (from, to, percent) {
//                $(this.el).find('.percent').text(Math.round(percent));
//            }
//	});
	













	
	    
//$('#test').mixItUp({
//    animation: {
//      animateResizeContainer: false,
//      effects: 'fade rotateX(-45deg) translateY(-10%)'
//   }
// });

// main-menu-scroll

	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  //alert(batas);
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	 
	
// scroll Up

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });	
   

    //End
});
