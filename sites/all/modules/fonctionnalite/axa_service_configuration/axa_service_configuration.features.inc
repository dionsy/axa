<?php
/**
 * @file
 * axa_service_configuration.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function axa_service_configuration_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "services" && $api == "services") {
    return array("version" => "3");
  }
}
