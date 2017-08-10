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

      $('#quicktabs-left_menu ul.quicktabs-tabs').append('<a href="javascript:void(0);" class="icon">&#9776;</a><a href="javascript:void(1);" class="icon-close">&#10060;</a>');
      $('#quicktabs-left_menu ul.quicktabs-tabs').addClass('topnav');
      $('#quicktabs-left_menu ul.quicktabs-tabs').attr( 'id', 'idForResponsive' );
      $('.topnav a.icon', context).on('click', function(){
        var x = document.getElementById("idForResponsive");

        if (x.className === "quicktabs-tabs quicktabs-style-navlist topnav") {
          x.className += " responsive";
        } 
        else {
          x.className = "quicktabs-tabs quicktabs-style-navlist topnav responsive";
        }
      });
      $('.topnav a.icon-close', context).on('click', function(){
        var x = document.getElementById("idForResponsive");

        if (x.className === "quicktabs-tabs quicktabs-style-navlist topnav responsive") {
          x.className += " ferme";
        } 
        else {
          x.className = "quicktabs-tabs quicktabs-style-navlist topnav responsive";
        }
      });

      
      /*$(".loupe").click(function(e) {
         $("form").addClass("fcurrent", 10000);
      });

      $(".icon-x-cross").click(function(e) {
          $("form").removeClass("fcurrent", 10000);
       });*/
      /*$("input:radio:checked").next("div.form-item-submitted-nom").addClass("fadeIn") ;*/
         /*$("input.form-radio:radio").change(function() {
          $('form-item-submitted-nom').addClass('fadeIn') ;
          });*/
        $(function() { 
          $('#webform-client-form-8 .form-item-submitted-nom').addClass('fadeIn') ;
          $('#webform-client-form-8 .form-item-submitted-prenom').addClass('fadeIn') ;
          $('.webform-component--civilite').addClass('fadeIn'  ) ;
          $('.webform-component--type-de-bien').addClass('fadeIn'  ) ;
          $('.form-item-submitted-marque').addClass('fadeIn') ;
          $('.form-item-submitted-annee-de-naissance').addClass('fadeIn') ;
          $('#edit-account .form-item-name').addClass('fadeIn') ;
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
               $('.form-item-submitted-nom').addClass('fadeIn' ) ;
               $('.form-item-submitted-prenom').addClass('fadeIn'  ) ;
               $('.form-item-submitted-adresse-du-bien-a-assurer').addClass('fadeIn') ;
               $('.form-item-submitted-puissance').addClass('fadeIn') ;

           } 
         });

        //ON CHANGE 

        $( "#edit-submitted-date-de-naissance-year" ).on('change', function (e) {
             $('.form-item-submitted-email').addClass('fadeIn'  ) ;
         });  
        $( ".form-item-submitted-date-premiere--mise-en-circulation-year" ).on('change', function (e) {
             $('.form-item-submitted-valeur-a-neuf').addClass('fadeIn'  ) ;
         }); 
        $('#edit-submitted-marque-select-1').on('change', function (e) {
             $('.webform-component--energie-du-vehicule').addClass('fadeIn') ;
        });
        $( "#edit-submitted-annee-de-naissance-year" ).on('change', function (e) {
             $('.form-item-submitted-age-dobtention-du-permis').addClass('fadeIn') ;
         });

        //FOCUSOUT
        $( ".form-item-submitted-adresse-du-bien-a-assurer" ).focusout(function() {
              $('.form-item-submitted-vous-etes').addClass('fadeIn'  ) ;
          });
     
        $( ".form-item-submitted-prenom" ).focusout(function() {
              $('.form-type-date').addClass('fadeIn'  ) ;
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
        $( "#edit-account .form-item-name" ).focusout(function() {
              $(' #edit-account .form-item-mail').addClass('fadeIn') ;
          });
        $( "#edit-account .form-item-mail" ).focusout(function() {
              $(' #edit-field-numero-telephone').addClass('fadeIn') ;
          });
        $( "#edit-field-numero-telephone" ).focusout(function() {
              $('#edit-field-numero-contrat').addClass('fadeIn') ;
          });
        $( ".form-item-submitted-puissance" ).focusout(function() {
              $('.form-item-submitted-date-premiere--mise-en-circulation').addClass('fadeIn') ;
          });
        $('#user-login #edit-pass').numpad({
          target: $('#user-login #edit-pass')
          }); 
        $('#edit-pass-pass1').numpad({
          target: $('#edit-pass-pass1')
          });
        $('#edit-pass-pass2').numpad({
          target: $('#edit-pass-pass2')
          });

        $('#edit-pass--2').numpad({
          target: $('#edit-pass--2')
          });
        $('#edit-pass1').numpad({
          target: $('#edit-pass1')
          });
        $('#edit-pass2').numpad({
          target: $('#edit-pass2')
          });
 
            $(".nmpd-display").keydown(function(event) { 
               return false;
            });

   }

  }
  /******     KEYPAD   ******/
  var cursorFocus = function(elem) {
    var x = window.scrollX, y = window.scrollY;
    elem.focus();
    window.scrollTo(x, y);
  }

    $.fn.numpad=function(options){

     
      if (typeof options == 'string'){
        var nmpd = $.data(this[0], 'numpad');
        if (!nmpd) throw "Cannot perform '" + options + "' on a numpad prior to initialization!";
        switch (options){
          case 'open': 
            nmpd.open(nmpd.options.target ? nmpd.options.target : this.first());
            break;
          case 'close':
            nmpd.open(nmpd.options.target ? nmpd.options.target : this.first());
            break;
        }
        return this;
      } 
      
    // Apply the specified options overriding the defaults
    options = $.extend({}, $.fn.numpad.defaults, options);
    
    // Create a numpad. One for all elements in this jQuery selector.
    // Since numpad() can be called on multiple elements on one page, each call will create a unique numpad id.
    var id = 'nmpd' + ($('.nmpd-wrapper').length + 1);
    var nmpd = {};
    return this.each(function(){
      
      // If an element with the generated unique numpad id exists, the numpad had been instantiated already.
      // Otherwise create a new one!
      if ($('#'+id).length == 0) {
        /** @var nmpd jQuery object containing the entire numpad */
        nmpd = $('<div id="' + id + '"></div>').addClass('nmpd-wrapper');
        nmpd.options = options;
        /** @var display jQuery object representing the display of the numpad (typically an input field) */
        var display = $(options.displayTpl).addClass('nmpd-display form-control');
        nmpd.display = display;
        /** @var grid jQuery object containing the grid for the numpad: the display, the buttons, etc. */
        var table = $(options.gridTpl).addClass('table modal-content nmpd-grid');
        nmpd.grid = table;
        table.append($(options.rowTpl).append($(options.displayCellTpl).append(display).append($('<input type="hidden" class="dirty" value="0"></input>'))));
        // Create rows and columns of the the grid with appropriate buttons
        table.append(
          $(options.rowTpl)
            .append($(options.cellTpl).append($(options.buttonNumberTpl).html(7).addClass('numero btn')))
            .append($(options.cellTpl).append($(options.buttonNumberTpl).html(8).addClass('numero btn')))
            .append($(options.cellTpl).append($(options.buttonNumberTpl).html(9).addClass('numero btn')))
            .append($(options.cellTpl).append($(options.buttonFunctionTpl).html(options.textDelete).addClass('btn del').click(function(){
              nmpd.setValue(nmpd.getValue().toString().substring(0,nmpd.getValue().toString().length - 1));
            })))
          ).append(
          $(options.rowTpl)
            .append($(options.cellTpl).append($(options.buttonNumberTpl).html(4).addClass('numero btn ')))
            .append($(options.cellTpl).append($(options.buttonNumberTpl).html(5).addClass('numero btn')))
            .append($(options.cellTpl).append($(options.buttonNumberTpl).html(6).addClass('numero btn')))
            .append($(options.cellTpl).append($(options.buttonFunctionTpl).html(options.textClear).addClass('clear btn').click(function(){
              nmpd.setValue('');
            })))
          ).append(
          $(options.rowTpl)
            .append($(options.cellTpl).append($(options.buttonNumberTpl).html(1).addClass('numero btn')))
            .append($(options.cellTpl).append($(options.buttonNumberTpl).html(2).addClass('numero btn')))
            .append($(options.cellTpl).append($(options.buttonNumberTpl).html(3).addClass('numero btn')))
            .append($(options.cellTpl).append($(options.buttonFunctionTpl).html(options.textCancel).addClass('cancel btn').click(function(){
              nmpd.close(false);
            })))
          ).append(
          $(options.rowTpl)
            .append($(options.cellTpl).append($(options.buttonFunctionTpl).html('')))
            .append($(options.cellTpl).append($(options.buttonNumberTpl).html(0).addClass('numero btn')))
            .append($(options.cellTpl).append($(options.buttonFunctionTpl).html('')))
            .append($(options.cellTpl).append($(options.buttonFunctionTpl).html(options.textDone).addClass('done btn')))
          );
        // Create the backdrop of the numpad - an overlay for the main page
        nmpd.append($(options.backgroundTpl).addClass('nmpd-overlay').click(function(){nmpd.close(false);}));
        // Append the grid table to the nmpd element
        nmpd.append(table);
        
        // Hide buttons to be hidden
        
        // Attach events
        if (options.onKeypadCreate){
          nmpd.on('numpad.create', options.onKeypadCreate);
        }
        if (options.onKeypadOpen){
          nmpd.on('numpad.open', options.onKeypadOpen);
        }
        if (options.onKeypadClose){
          nmpd.on('numpad.close', options.onKeypadClose);
        }
        if (options.onChange){
          nmpd.on('numpad.change', options.onChange);
        }
        (options.appendKeypadTo ? options.appendKeypadTo : $(document.body)).append(nmpd);   
        
        // Special event for the numeric buttons
        $('#'+id+' .numero').bind('click', function(){
          var val;
          if ($('#'+id+' .dirty').val() == '0'){
            val = $(this).text();
          } else {
            val = nmpd.getValue() ? nmpd.getValue().toString() + $(this).text() : $(this).text();
          }
          nmpd.setValue(val); 
        });
        
        // Finally, once the numpad is completely instantiated, trigger numpad.create
        nmpd.trigger('numpad.create');
      } else {
        // If the numpad was already instantiated previously, just load it into the nmpd variable
        //nmpd = $('#'+id);
        //nmpd.display = $('#'+id+' input.nmpd-display'); 
      }
      
      $.data(this, 'numpad', nmpd);
      
      // Make the target element readonly and save the numpad id in the data-numpad property. Also add the special nmpd-target CSS class.
      $(this).attr("readonly", true).attr('data-numpad', id).addClass('nmpd-target');
      
      // Register a listener to open the numpad on the event specified in the options
      $(this).bind(options.openOnEvent,function(){
        nmpd.open(options.target ? options.target : $(this));
      });
      
      // Define helper functions
      
      /**
      * Gets the current value displayed in the numpad
      * @return string | number
      */
      nmpd.getValue = function(){
        return isNaN(nmpd.display.val()) ? 0 : nmpd.display.val();
      };
      
      /**
      * Sets the display value of the numpad
      * @param string value
      * @return jQuery object nmpd
      */
      nmpd.setValue = function(value){
        if (nmpd.display.attr('maxLength') < value.toString().length) value = value.toString().substr(0, nmpd.display.attr('maxLength'));
        nmpd.display.val(value);
        nmpd.find('.dirty').val('1');
        nmpd.trigger('numpad.change', [value]);
        return nmpd;
      };
      
      /**
      * Closes the numpad writing it's value to the given target element
      * @param jQuery object target
      * @return jQuery object nmpd
      */
      nmpd.close = function(target){
        // If a target element is given, set it's value to the dipslay value of the numpad. Otherwise just hide the numpad
        if (target){
          if (target.prop("tagName") == 'INPUT'){
            target.val(nmpd.getValue().toString());
          } else {
            target.html(nmpd.getValue().toString());
          }
        } 
        // Hide the numpad and trigger numpad.close
        nmpd.hide();
        nmpd.trigger('numpad.close');
        // Trigger a change event on the target element if the value has really been changed
        // TODO check if the value has really been changed!
        if (target && target.prop("tagName") == 'INPUT'){
          target.trigger('change');
        }
        return nmpd;
      };
      
      /**
      * Opens the numpad for a given target element optionally filling it with a given value
      * @param jQuery object target
      * @param string initialValue
      * @return jQuery object nmpd
      */
      nmpd.open = function(target, initialValue){
        // Set the initial value
        // Use nmpd.display.val to avoid triggering numpad.change for the initial value
        if (initialValue){
          nmpd.display.val(initialValue);
        } else {
          if (target.prop("tagName") == 'INPUT'){
            nmpd.display.val(target.val());
            nmpd.display.attr('maxLength', '8');
          } else {
            nmpd.display.val(isNaN(parseFloat(target.text())) ? '' : parseFloat(target.text()));
          }
        }
        // Mark the numpad as not dirty initially
        $('#'+id+' .dirty').val(0);
        // Show the numpad and position it on the page
        cursorFocus(nmpd.show().find('.cancel'));
        position(nmpd.find('.nmpd-grid'), options.position, options.positionX, options.positionY);
        // Register a click handler on the done button to update the target element
        // Make sure all other click handlers get removed. Otherwise some unwanted sideeffects may occur if the numpad is
        // opened multiple times for some reason
        $('#'+id+' .done').off('click');
        $('#'+id+' .done').one('click', function(){ nmpd.close(target); });
        // Finally trigger numpad.open
        nmpd.trigger('numpad.open');
        return nmpd;
      };      
    });
    };
    
  /**
  * Positions any given jQuery element within the page
  */
    function position(element, mode, posX, posY) {
      var x = 0;
      var y = 0;
      if (mode == 'fixed'){
          element.css('position','fixed');
          
          if (posX == 'left'){
            x = 0;
          } else if (posX == 'right'){
            x = $(window).width() - element.outerWidth();
          } else if (posX == 'center'){
            x = ($(window).width() / 2) - (element.outerWidth() / 2);
          } else if ($.type(posX) == 'number'){
            x = posX;
          }
          element.css('left', x);
                    
          if (posY == 'top'){
            y = 0;
          } else if (posY == 'bottom'){
            y = $(window).height() - element.outerHeight();
          } else if (posY == 'middle'){
            y = ($(window).height() / 2) - (element.outerHeight() / 2);
          } else if ($.type(posY) == 'number'){
            y = posY;
          }
          element.css('top', y);
      }
        return element;
    }
  
  // Default values for numpad options
  $.fn.numpad.defaults = {
    target: false,
    openOnEvent: 'click',
    backgroundTpl: '<div></div>',
    gridTpl: '<table></table>',
    displayTpl: '<input type="password"  />',
    displayCellTpl: '<td colspan="4"></td>',
    rowTpl: '<tr></tr>',
    cellTpl: '<td></td>',
    buttonNumberTpl: '<button></button>',
    buttonFunctionTpl: '<button></button>',
    gridTableClass: '',
    hidePlusMinusButton: false,
    hideDecimalButton: false,
    textDone: 'Done',
    textDelete: 'Del',
    textClear: 'Clear',
    textCancel: 'Cancel',
    decimalSeparator: ',',
    precision: null,
    appendKeypadTo: false,
    position: 'fixed',
    positionX: 'center',
    positionY: 'middle',
    onKeypadCreate: false,
    onKeypadOpen: false,
    onKeypadClose: false,
    onChange: false
  };
  

})(jQuery, Drupal);

