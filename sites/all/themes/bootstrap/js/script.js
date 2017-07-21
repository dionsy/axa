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
         $("form").addClass("fcurrent", 10000);
      });

      $(".icon-x-cross").click(function(e) {
          $("form").removeClass("fcurrent", 10000);
       });
      /*$("input:radio:checked").next("div.form-item-submitted-nom").addClass("fadeIn") ;*/
       /*$("input.form-radio:radio").change(function() {
        $('form-item-submitted-nom').addClass('fadeIn') ;
        });*/
        $(function() { 
          $('.webform-component--civilite').addClass('fadeIn'  ) ;
          $('.webform-component--type-de-bien').addClass('fadeIn'  ) ;
          $('#webform-client-form-8 .form-item-submitted-nom').addClass('fadeIn') ;
          $('#webform-client-form-8 .form-item-submitted-prenom').addClass('fadeIn') ;
          $('.form-item-submitted-marque').addClass('fadeIn') ;
          $('.form-item-submitted-annee-de-naissance').addClass('fadeIn') ;
        });
        $('#edit-submitted-type-de-bien').on('change', function (e) {
             $('.form-item-submitted-nombre-de-pieces').addClass('fadeIn') ;
        });
         $('#edit-submitted-vous-etes').on('change', function (e) {
             $('.form-item-submitted-quand-souhaitez-vous-etre-assure').addClass('fadeIn') ;
        });
         
           $( ".form-item-submitted-nombre-de-pieces").focusout(function() {
            $('.webform-component--ce-logement-est-il-votre-residence-principale').addClass('fadeIn'  ) ;
        });
       $('.webform-client-form').click(function() {
           if($('input:radio:checked').is(':checked')){
               $('.form-item-submitted-nom').addClass('fadeIn'  ) ;
               $('.form-item-submitted-prenom').addClass('fadeIn'  ) ;
               $('.form-item-submitted-adresse-du-bien-a-assurer').addClass('fadeIn') ;
           } 
         });

         $( ".form-item-submitted-adresse-du-bien-a-assurer" ).focusout(function() {
              $('.form-item-submitted-vous-etes').addClass('fadeIn'  ) ;
          });
        $( ".form-item-submitted-prenom" ).focusout(function() {
              $('.form-type-date').addClass('fadeIn'  ) ;
          });

        $( "#edit-submitted-date-de-naissance-year" ).on('change', function (e) {
             $('.form-item-submitted-email').addClass('fadeIn'  ) ;
         }); 

        $( ".form-item-submitted-email").focusout(function() {
             $('.form-item-submitted-telephone').addClass('fadeIn'  ) ;
         });
        $( ".form-item-submitted-telephone").focusout(function() {
             $('.form-item-submitted-type-dassurance').addClass('fadeIn'  ) ;
        });
        $( ".form-item-submitted-age-dobtention-du-permis").focusout(function() {
             $('.webform-component--email-conducteur').addClass('fadeIn'  ) ;
        });
        $('#edit-submitted-marque-select-1').on('change', function (e) {
             $('.webform-component--energie-du-vehicule').addClass('fadeIn') ;
        });
        $( "#edit-submitted-annee-de-naissance-year" ).on('change', function (e) {
           $('.form-item-submitted-age-dobtention-du-permis').addClass('fadeIn'  ) ;
         });

   }
  }
})(jQuery, Drupal);

