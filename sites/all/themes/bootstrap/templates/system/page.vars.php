<?php
/**
 * @file
 * Stub file for "page" theme hook [pre]process functions.
 */

/**
 * Pre-processes variables for the "page" theme hook.
 *
 * See template for list of available variables.
 *
 * @see page.tpl.php
 *
 * @ingroup theme_preprocess
 */
function bootstrap_preprocess_page(&$variables) {

  // Add information about the number of sidebars.
  if (!empty($variables['page']['sidebar_first']) && !empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-sm-6"';
  }
  elseif (!empty($variables['page']['sidebar_first']) || !empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-sm-9"';
  }
  else {
    $variables['content_column_class'] = ' class="col-sm-12"';
  }

  if (bootstrap_setting('fluid_container') == 1) {
    $variables['container_class'] = 'container-fluid';
  }
  else {
    $variables['container_class'] = 'container';
  }

  // Primary nav.
  $variables['primary_nav'] = FALSE;
  if ($variables['main_menu']) {
    // Build links.
    $variables['primary_nav'] = menu_tree(variable_get('menu_main_links_source', 'main-menu'));
    // Provide default theme wrapper function.
    $variables['primary_nav']['#theme_wrappers'] = array('menu_tree__primary');
  }

  // Secondary nav.
  $variables['secondary_nav'] = FALSE;
  if ($variables['secondary_menu']) {
    // Build links.
    $variables['secondary_nav'] = menu_tree(variable_get('menu_secondary_links_source', 'user-menu'));
    // Provide default theme wrapper function.
    $variables['secondary_nav']['#theme_wrappers'] = array('menu_tree__secondary');
  }

  $variables['navbar_classes_array'] = array('navbar');

  if (bootstrap_setting('navbar_position') !== '') {
    $variables['navbar_classes_array'][] = 'navbar-' . bootstrap_setting('navbar_position');
  }
  elseif (bootstrap_setting('fluid_container') == 1) {
    $variables['navbar_classes_array'][] = 'container-fluid';
  }
  else {
    $variables['navbar_classes_array'][] = 'container';
  }
  if (bootstrap_setting('navbar_inverse')) {
    $variables['navbar_classes_array'][] = 'navbar-inverse';
  }
  else {
    $variables['navbar_classes_array'][] = 'navbar-default';
  }
}

/**
 * Processes variables for the "page" theme hook.
 *
 * See template for list of available variables.
 *
 * @see page.tpl.php
 *
 * @ingroup theme_process
 */
function bootstrap_process_page(&$variables) {
  $variables['navbar_classes'] = implode(' ', $variables['navbar_classes_array']);

//Custom error page

    $header = drupal_get_http_header('status'); 
    $title =  drupal_get_title();


 if($variables['page']['#type']=='page'){
    $variables['theme_hook_suggestions'][] = 'page__'.transliteration_clean_filename($title);
 }

  if ($header == '403 Forbidden') { 
    $variables['page']['content']['system_main']['main']['#markup']="";
   drupal_set_title('');
  }
  if(isset($variables['theme_hook_suggestions'][3]) && $variables['theme_hook_suggestions'][3]=='page__acces_refuse' ){
      $variables['theme_hook_suggestions'][3] = 'page__espace_client';
      $variables['title'] ='';
  }


if(isset($variables['theme_hook_suggestions'][2]) && $variables['theme_hook_suggestions'][2]=='page__compte_utilisateur' ){
   $variables['theme_hook_suggestions'][2] = 'page__espace_client';
 /* if(user_is_logged_in())
  else
    $variables['theme_hook_suggestions'][2] = 'page__user';*/
}


 //krumong('main')->kPrint($variables);

  if ($header == '404 Not Found') {     
    $variables['theme_hook_suggestions'][] = 'page__404';
  }
}


