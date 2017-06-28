<?php
/**
 * @file
 * Stub file for bootstrap_file_managed_file().
 */

/**
 * Returns HTML for a managed file element.
 *
 * @param array $variables
 *   An associative array containing:
 *   - element: A render element representing the file.
 *
 * @return string
 *   The constructed HTML.
 *
 * @see theme_file_managed_file()
 *
 * @ingroup theme_functions
 */
function bootstrap_file_managed_file($variables) {
  $output = '';
  $element = $variables['element'];
 // krumong('main')->kPrint($element);

  $attributes = array();
  if (isset($element['#id'])) {
    $attributes['id'] = $element['#id'];
  }
  if (!empty($element['#attributes']['class'])) {
    $attributes['class'] = (array) $element['#attributes']['class'];
  }
  $attributes['class'][] = 'form-managed-file';
  $attributes['class'][] = 'input-group';

  $element['upload_button']['#attributes']['class'][] = 'btn-primary';
  $element['upload_button']['#prefix'] = '<span class="input-group-btn">';
  $element['upload_button']['#suffix'] = '</span>';
  $element['remove_button']['#prefix'] = '<span class="input-group-btn">';
  $element['remove_button']['#suffix'] = '</span>';
  $element['remove_button']['#attributes']['class'][] = 'btn-danger';

  if (!empty($element['filename'])) {
    $element['filename']['#prefix'] = '<div class="form-control">';
    $element['filename']['#suffix'] = '</div>';
  }

  // This wrapper is required to apply JS behaviors and CSS styling.
  $output .= '<div' . drupal_attributes($attributes) . '>';

  // Immediately render hidden elements before the rest of the output.
  // The uploadprogress extension requires that the hidden identifier input
  // element appears before the file input element. They must also be siblings
  // inside the same parent element.
  // @see https://www.drupal.org/node/2155419
  foreach (element_children($element) as $child) {
    if (isset($element[$child]['#type']) && $element[$child]['#type'] === 'hidden') {
      $output .= drupal_render($element[$child]);
    }
  }

  // Render the rest of the element.
  $output .= drupal_render_children($element);
  $output .= '</div>';
  return $output;
}


/*file icons*/
function bootstrap_file_link($vars) {
  $file = $vars['file'];
 // $icon_directory = $vars['icon_directory'];
  $url = file_create_url($file->uri);
  $icon = theme('file_icon', array('file' => $file));
$desc=$file->description;
  // Set options as per anchor format described at
  // http://microformats.org/wiki/file-format-examples
  $options = array(
    'attributes' => array(
      'type' => $file->filemime . '; length=' . $file->filesize,
    ),
  );

  // Use the description as the link text if available.
  if (empty($file->description)) {
    /*$link_text = $file->filename;*/
    $link_text = 'Contrat';
  }
  else {
    $link_text = $file->description;
    $options['attributes']['title'] = check_plain($file->filename);
  }
  $mimeclass = drupal_html_class(str_replace('application/', '', $file->filemime));

  $options['attributes']['class'] = array('icon-file', $mimeclass);

  return l($link_text, $url, $options);
}

/*function bootstrap_file_icon($vars) {
  $file = $vars['file'];
  $mime = drupal_html_class(str_replace('application-', $file->filemime));
  return '<div class="file-icon ' . $mime . '"></div>';
}*/