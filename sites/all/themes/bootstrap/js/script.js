/*(function($, Drupal){
  Drupal.behaviors.kyziahSlickSlider = {
    attach: function(context, settings){
        $('.slide', context).slick({
          autoplay: true,
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
        });}}}


(function($) {
    // Here $ is the jQuery namespace.
    $(".slide").slick();
    console.log('wele');
})(jQuery);*/

(function($, Drupal){
  Drupal.behaviors.kyziahSlickSlider = {
    attach: function(context, settings){
       if($('.front', context).length){     

         $('.slide', context).slick({
          autoplay: true,
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
        });

      }
      
    }
  }

})(jQuery, Drupal);
