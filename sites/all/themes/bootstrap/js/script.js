(function($, Drupal){
  Drupal.behaviors.kyziahSlickSlider = {
    attach: function(context, settings){
          if($('.front', context).length){
             $('.slide', context).slick({
              autoplay: true,
              dots: true,
              infinite: true,
              speed: 1500,
              slidesToShow: 1,
              slidesToScroll: 1,
              fade:true
            });

           /*$('.view-partenaire .view-content', context).slick({
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });*/


      }

      $('.view-faq li.views-row', context).on('click', function(){
          var classes = $(this).attr('class');
          var separateur = " ";
          var tab_classe = classes.split(separateur);
          var classe = tab_classe[1];
          var cible = ".view-faq div.";

          if(classe){
            cible = cible+classe;
            $( "div" ).removeClass("courant");
            $( cible ).addClass("courant");
          }

        });

      
      $(".loupe").click(function(e) {
          $("form").removeClass("fcurrent");
          $("form").addClass("fcurrent");
      });
    }
  }

})(jQuery, Drupal);

