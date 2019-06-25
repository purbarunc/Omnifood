$(document).ready(function(){

    /** To activate sticky navigation */
    $('.js-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky-nav');
        }
        else{
            $('nav').removeClass('sticky-nav');
        }
    },
    {
        offset: '60px;'
    });

    /* Scroll on button click */
    $('.js-scroll-to-plan').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-section-plans').offset().top
        }, 1000); 
    });
    $('.js-scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-features').offset().top
        }, 1000); 
    });

    /*Navigation Scroll */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

      /*On Scroll Animations */
      $('.js-waypoint-1').waypoint(function(direction){
        $('.js-waypoint-1').addClass('animated fadeIn');
      },
      {
        offset: '50%'
      });
      $('.js-waypoint-2').waypoint(function(direction){
        $('.js-waypoint-2').addClass('animated fadeInUp');
      },
      {
        offset: '50%'
      });
      $('.js-waypoint-3').waypoint(function(direction){
        $('.js-waypoint-3').addClass('animated fadeIn');
      },
      {
        offset: '50%'
      });
      $('.js-waypoint-4').waypoint(function(direction){
        $('.js-waypoint-4').addClass('animated pulse');
      },
      {
        offset: '50%'
      });
});

