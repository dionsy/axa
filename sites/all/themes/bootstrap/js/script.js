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
*/

(function($) {
    // Here $ is the jQuery namespace.
    $('.slide').slick();
})(jQuery);