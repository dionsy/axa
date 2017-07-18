<?php


function bootstrap_node_view_alter(&$build){
 // krumong('main')->kPrint($build,'node');
  
}


/**
 * @file
 * Stub file for bootstrap_menu_link() and suggestion(s).
 */

/**
 * Returns HTML for a menu link and submenu.
 *
 * @param array $variables
 *   An associative array containing:
 *   - element: Structured array data for a menu link.
 *
 * @return string
 *   The constructed HTML.
 *
 * @see theme_menu_link()
 *
 * @ingroup theme_functions
 */
function bootstrap_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';
  $class='';
  //$classli='';
  $prefix ='';
  $list_nid =array();

  $below =$element['#below'];

    //krumong('main')->kPrint($variables['theme_hook_original']);

if($variables['theme_hook_original']=='menu_link__menu_menu_principal'){
  
  if($below){

  foreach ($below as $elt) {  

    if(isset($elt['#href']) && !empty($elt['#href']))      
       $nid = explode('/', $elt['#href']);

      if(isset($nid[1])){
       array_push($list_nid, $nid[1]);
      }
    # code...
   // krumong('main')->kPrint($list_nid,'nid');
  }
  }
//  n.nid in ($list_nid)
}
// Return all nids of nodes of type "page".
 $nid_array = array();
 $i=0;
    foreach ($list_nid as $value) {
      $nid_array[$i] = $value;
      $i++;
    }



  $options = !empty($element['#localized_options']) ? $element['#localized_options'] : array();

  // Check plain title if "html" is not set, otherwise, filter for XSS attacks.
  $title = empty($options['html']) ? check_plain($element['#title']) : filter_xss_admin($element['#title']);

  // Ensure "html" is now enabled so l() doesn't double encode. This is now
  // safe to do since both check_plain() and filter_xss_admin() encode HTML
  // entities. See: https://www.drupal.org/node/2854978
  $options['html'] = TRUE;
  // Ajouter une classe particuliere sur les items de menu
 $class = transliteration_clean_filename($element['#title']);
 
 if($variables['theme_hook_original']=='menu_link__menu_menu_principal'){
  $class='';
  
}
  $options['attributes']['class'][] = $class;

  $href = $element['#href'];
  $attributes = !empty($element['#attributes']) ? $element['#attributes'] : array();

       if( $variables['theme_hook_original']=='menu_link__user_menu'){
           $prefix='<i class="fa fa-cog" aria-hidden="true"></i>';
        //krumong('main')->kPrint($element);
          if($element['#title']=='paramettre'){
            $title = $prefix;
          }
        }
  if ($element['#below']) {
    // Prevent dropdown functions from being added to management menu so it
    // does not affect the navbar module.
//krumong('main')->kPrint($element['#below']);

    if (($element['#original_link']['menu_name'] == 'management') && (module_exists('navbar'))) {
      $sub_menu = drupal_render($element['#below']);
    }
    elseif ((!empty($element['#original_link']['depth'])) && ($element['#original_link']['depth'] == 1)) {
      // Add our own wrapper.
      unset($element['#below']['#theme_wrappers']);
      $sub_menu = '<ul class="dropdown-menu">' . drupal_render($element['#below']) .'</ul>';

      // Generate as standard dropdown.
      $title .= ' <span class="caret"></span>';
      $attributes['class'][] = 'dropdown';




      // Set dropdown trigger element to # to prevent inadvertant page loading
      // when a submenu link is clicked.
      $options['attributes']['data-target'] = '#';
      $options['attributes']['class'][] = 'dropdown-toggle';
      $options['attributes']['data-toggle'] = 'dropdown';
    }
  }
if($element['#original_link']['menu_name']=='user-menu'){  
  $prefix ='<i class="fa fa-cogs" aria-hidden="true" style="font-size: 25px;"></i>';
}

if($element['#original_link']['menu_name']=='menu-r-seaux-sociaux-'){ 
    $title='';
}


if($variables['theme_hook_original']=='menu_link__menu_menu_principal'){
  $class='';
  $attributes['class'][] = transliteration_clean_filename($element['#title']);
}


  return '<li' . drupal_attributes($attributes) . '>' .$prefix.l($title, $href, $options) . $sub_menu . "</li>\n";
}

/**
 * Overrides theme_menu_link() for book module.
 */
function bootstrap_menu_link__book_toc(array $variables) {
  $element = $variables['element'];
  $sub_menu = drupal_render($element['#below']);

  $title = $element['#title'];
  $href = $element['#href'];
  $options = !empty($element['#localized_options']) ? $element['#localized_options'] : array();
  $attributes = !empty($element['#attributes']) ? $element['#attributes'] : array();
  $attributes['role'] = 'presentation';

  // Header.
  $link = TRUE;
  if ($title && $href === FALSE) {
    $attributes['class'][] = 'dropdown-header';
    $link = FALSE;
  }
  // Divider.
  elseif ($title === FALSE && $href === FALSE) {
    $attributes['class'][] = 'divider';
    $link = FALSE;
  }
  // Active.
  elseif (($href == $_GET['q'] || ($href == '<front>' && drupal_is_front_page())) && (empty($options['language']))) {
    $attributes['class'][] = 'active';
  }

  // Convert to a link.
  if ($link) {
    $title = l($title, $href, $options);
  }
  // Otherwise, filter the title if "html" is not set, otherwise l() will automatically
  // sanitize using check_plain(), so no need to call that here.
  elseif (empty($options['html'])) {
    $title = filter_xss_admin($title);
  }

  return '<li' . drupal_attributes($attributes) . '>' . $title . $sub_menu . "</li>\n";
}
