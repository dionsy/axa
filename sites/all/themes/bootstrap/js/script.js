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
      
      $('.quicktabs-tab-block-declarer-sinistre-delta-declarer-sinistre').parents('li').addClass('declarer-sinistre');
      $('.quicktabs-tab-block-rendez-vous-delta-rendez-vous').parents('li').addClass('hide');
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
         
           $( ".form-item-submitted-nombre-de-pieces").keyup(function() {
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
        $( ".form-item-submitted-adresse-du-bien-a-assurer" ).keyup(function() {
              $('.form-item-submitted-vous-etes').addClass('fadeIn'  ) ;
          });
     
        $( ".form-item-submitted-prenom" ).keyup(function() {
              $('.form-type-date').addClass('fadeIn'  ) ;
          });
        $( ".form-item-submitted-email").keyup(function() {
             $('.form-item-submitted-telephone').addClass('fadeIn'  ) ;
         });
        $( ".form-item-submitted-telephone").keyup(function() {
             $('.form-item-submitted-type-dassurance').addClass('fadeIn'  ) ;
        });
        $( ".form-item-submitted-age-dobtention-du-permis").keyup(function() {
             $('.webform-component--email-conducteur').addClass('fadeIn'  ) ;
        });        
        $( "#edit-account .form-item-name" ).keyup(function() {
              $(' #edit-account .form-item-mail').addClass('fadeIn') ;
          });
        $( "#edit-account .form-item-mail" ).keyup(function() {
              $(' #edit-field-numero-telephone').addClass('fadeIn') ;
          });
        $( "#edit-field-numero-telephone" ).keyup(function() {
              $('#edit-field-numero-contrat').addClass('fadeIn') ;
          });
        $( ".form-item-submitted-puissance" ).keyup(function() {
              $('.form-item-submitted-date-premiere--mise-en-circulation').addClass('fadeIn') ;
          });
        $('#user-login #edit-pass').numpad(
          {
             target: $('#user-login #edit-pass')
          }); 
        $('#edit-pass-pass1').numpad(
          {
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
         /* $('#user-login #edit-pass').bind('blur  ' ,function(){
            $("#nmpd1").hide();
          });*/
          $("input:password").bind('click focus', function(){
             $(this).attr("readonly", false);
          }).bind('blur', function(){
             $(this).attr("readonly", true);
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
      
    options = $.extend({}, $.fn.numpad.defaults, options);
    
    var id = 'nmpd' + ($('.nmpd-wrapper').length + 1);
    var nmpd = {};
    return this.each(function(){
        if ($('#'+id).length == 0) {
            nmpd = $('<div id="' + id + '"></div>').addClass('nmpd-wrapper');
            nmpd.options = options;
            var display = nmpd.options.target.addClass('nmpd-display form-control');
            nmpd.display = display;
            var table = $(options.gridTpl).addClass('table modal-content nmpd-grid');
            nmpd.grid = table;
           // table.append($(options.rowTpl).append($(options.displayCellTpl).append(display).append($('<input type="hidden" class="dirty" value="0"></input>'))));
            tbchiffre =[1,2,3,4,5,6,7,8,9,0]; 
             var rt = $(options.rowTpl) ;
        
               for (var i = 0 ; i<10 ; i++){

                  if(i==3){
                    rt.append($(options.cellTpl).append($(options.buttonFunctionTpl).html(options.textClear).addClass('clear btn').click(function(event){
                       event.preventDefault();
                      nmpd.setValue('');
                    })));
                    table.append(rt) ;
                    rt = $(options.rowTpl) ;
                  }
                  if(i==6){
                    rt.append($(options.cellTpl).append($(options.buttonFunctionTpl).html(options.textCancel).addClass('cancel btn').click(function(event){
                        event.preventDefault();
                       nmpd.close(false);
                    })))
                    table.append(rt) ;
                    rt = $(options.rowTpl) ;
                  }
                  var dt;
                  if(tbchiffre.length==1){
                    dt = $(options.cellTpl).append($(options.buttonNumberTpl).html(tbchiffre[0]).addClass('numero btn'));
                  }
                  else{
                    var spl=Math.round(Math.random()*(tbchiffre.length-1));
                    dt = $(options.cellTpl).append($(options.buttonNumberTpl).html(tbchiffre[spl]).addClass('numero btn'));
                    tbchiffre.splice(spl,1);
                  }
                  rt.append(dt);
               }
                table.append(rt);

            nmpd.append($(options.backgroundTpl).addClass('nmpd-overlay').click(function(){nmpd.close(false);}));
            nmpd.append(table);
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
            (options.appendKeypadTo ? options.appendKeypadTo : $("form div.form-type-password input")).after(nmpd);   

              $('#'+id+' .numero').bind('click', function(event){
                event.preventDefault();
                var val;
                if ($('#'+id+' .dirty').val() == '0'){
                  val = $(this).text();
                } else {
                  val = nmpd.getValue() ? nmpd.getValue().toString() + $(this).text() : $(this).text();
                }
                nmpd.setValue(val); 
              }); 

            nmpd.trigger('numpad.create');
        } 
      
        $.data(this, 'numpad', nmpd);

        $(this).attr('data-numpad', id).addClass('nmpd-target');

        $(this).bind(options.openOnEvent,function(){
           nmpd.open(options.target ? options.target : $(this));
        });
        
        nmpd.getValue = function(){
           return isNaN(nmpd.display.val()) ? 0 : nmpd.display.val();
        };
        
        nmpd.setValue = function(value){
          if (nmpd.display.attr('maxLength') < value.toString().length) value = value.toString().substr(0, nmpd.display.attr('maxLength'));
          nmpd.display.val(value);
          nmpd.find('.dirty').val('1');
          nmpd.trigger('numpad.change', [value]);
          return nmpd;
        };

        nmpd.close = function(target ){
          
          if (target){
            if (target.prop("tagName") == 'INPUT'){
              target.val(nmpd.getValue().toString());
            } else {
              target.html(nmpd.getValue().toString());
            }
          } 
          nmpd.hide();
          nmpd.trigger('numpad.close');
          if (target && target.prop("tagName") == 'INPUT'){
            target.trigger('change');
          }
          return nmpd;
        };    

      nmpd.open = function(target, initialValue){
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
        $('#'+id+' .dirty').val(0);
        cursorFocus(nmpd.show().find('.cancel'));
        //position(nmpd.find('.nmpd-grid'), options.position, options.positionX, options.positionY);
        $('#'+id+' .done').off('click');
        $('#'+id+' .done').one('click', function(){ nmpd.close(target , ); });
        nmpd.trigger('numpad.open');
        return nmpd;
      };      
    });
    };
/*    
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
    }*/
  
  // Default values for numpad options
  $.fn.numpad.defaults = {
    target: false,
    openOnEvent: 'click',
    backgroundTpl: '<div></div>',
    gridTpl: '<table></table>',
    /*displayTpl: '<input type="password"  />',*/
    displayCellTpl: '<td colspan="4"></td>',
    rowTpl: '<tr></tr>',
    cellTpl: '<td></td>',
    buttonNumberTpl: '<button></button>',
    buttonFunctionTpl: '<button></button>',
    gridTableClass: '',
    hidePlusMinusButton: false,
    hideDecimalButton: false,
    textDone: 'Valider',
    textDelete: 'Supprimer',
    textClear: 'Effacer',
    textCancel: 'Valider',
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

