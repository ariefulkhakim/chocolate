(function($) {

jQuery(document).ready(function() {
  
  //lightbox
  $(document).ready(function(){
    $('a').nivoLightbox();
  });
    //this code for the croll animation
  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
    

    //this code is for header
   jQuery(window).scroll(function() {
      var windowScrollPosTop = jQuery(window).scrollTop();

      if(windowScrollPosTop >= 200) {
        jQuery(".navbar-brand").css({"margin-top": "-5px", "margin-bottom": "5px"});
        jQuery(".navbar-default").css({"margin-top": "-12px", "margin-bottom": "-12px"});
        jQuery(".top-header").css({"background-color": "rgba(51, 51, 51, 0.64)", "border-bottom": "2px solid rgba(51, 51, 51, 0.64)"});
        jQuery(".navbar-nav li a").css({"color": "white"});
        jQuery(".navbar-nav li a:hover").css({"color": "red"});
      }
      else{
        jQuery(".navbar-brand").css({"margin-top": "-5px", "border-bottom": "5px"});
         jQuery(".navbar-default").css({"margin-top": "25px", "margin-bottom": "15px"});
          jQuery(".top-header").css({"background-color": "transparent", "border-bottom": "none"});
          jQuery(".navbar-nav li a").css({"color": "black"});
          jQuery(".navbar-nav li a:hover").css({"color": "red"});
        
      }
   });

});

}) (jQuery);
$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});



//owl carousel for testimonials
$(document).ready(function() {
 
  $("#testimonial-carousel").owlCarousel({
      // Most important owl features
    items : 1,
    itemsCustom : false,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    startDragging : true,
    autoPlay: true
  });
 
});



