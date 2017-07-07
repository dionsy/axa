<?php
/**
 * @file
 * Stub file for bootstrap_breadcrumb().
 */

/**
 * Returns HTML for a breadcrumb trail.
 *
 * @param array $variables
 *   An associative array containing:
 *   - breadcrumb: An array containing the breadcrumb links.
 *
 * @return string
 *   The constructed HTML.
 *
 * @see theme_breadcrumb()
 *
 * @ingroup theme_functions
 */
function bootstrap_breadcrumb($variables) {
  // Use the Path Breadcrumbs theme function if it should be used instead.
  
 /* if (_bootstrap_use_path_breadcrumbs()) {
    return path_breadcrumbs_breadcrumb($variables);
  }*/

  $trail = menu_get_active_trail();
  $output='';

  if(isset($trail[1]['map'])){

     $node = $trail[1]['map'][1];
     $type= $node->type;
     /*$tid= $node->field_type_de_contrat['und'][0]['tid'];
     $taxo = taxonomy_term_load($tid);
     $type_contrat = $taxo->name;*/

    switch ($type) {
      case 'nos_produits':
        $terms = field_view_field('node', $node, 'field_type_de_contrat');  
        $variables['breadcrumb']['1'] = '<span>Assurance</span>';
        $variables['breadcrumb']['2'] = '<span>'.$terms['0']['#title'].'</span>';
        break;     
    }
  }

  $breadcrumb = $variables['breadcrumb'];
  $crumb_arrow = '';
  $arr_crumbs = array();

  if (!empty($breadcrumb)) {


    array_push($arr_crumbs,  implode($crumb_arrow, $breadcrumb));

    $array_size = count($arr_crumbs);
    for ($i=0; $i < $array_size; $i++) {
      if ( $i == $array_size - 1 ) {
        // Menu link title may override the content title
        (menu_get_active_title()) ? $current_crumb = menu_get_active_title() : $current_crumb = drupal_get_title();
        // If current page is 'Edit Page'
        if (substr(drupal_get_title(), 0, 18) == '<em>Edit Page</em>') {
          $current_crumb = 'Edit';
        }


        $output .= $arr_crumbs[$i] . '<span class="crumbs-current a--breadcrumb">' . $current_crumb . '</span>';
       break;
      }
      if($arr_crumbs[$i]=="array")
     // krumong('main')->kPrint($arr_crumbs[$i]);
      $output .= $arr_crumbs[$i];    
    }


    return '<div class="breadcrumb small clearfix">' . $output . '</div>';
  }
}
