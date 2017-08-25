<?php
/**
 * @file
 * devis_service_configuration.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function devis_service_configuration_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'webform_uuid_list';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'webform';
  $view->human_name = 'Webform UUID List';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Webform UUID List';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_text'] = 'plus';
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Appliquer';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Réinitialiser';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Trier par';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '10';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relation: Webform : Nœud */
  $handler->display->display_options['relationships']['nid']['id'] = 'nid';
  $handler->display->display_options['relationships']['nid']['table'] = 'webform';
  $handler->display->display_options['relationships']['nid']['field'] = 'nid';
  /* Champ: Contenu : Nœud UUID */
  $handler->display->display_options['fields']['uuid']['id'] = 'uuid';
  $handler->display->display_options['fields']['uuid']['table'] = 'node';
  $handler->display->display_options['fields']['uuid']['field'] = 'uuid';
  $handler->display->display_options['fields']['uuid']['relationship'] = 'nid';
  $handler->display->display_options['fields']['uuid']['label'] = 'uuid';
  $handler->display->display_options['fields']['uuid']['element_label_colon'] = FALSE;
  /* Champ: Contenu : Titre */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['relationship'] = 'nid';
  $handler->display->display_options['fields']['title']['alter']['trim_whitespace'] = TRUE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Champ: Global : Regular Expression Re-Write */
  $handler->display->display_options['fields']['regex_rewrite']['id'] = 'regex_rewrite';
  $handler->display->display_options['fields']['regex_rewrite']['table'] = 'views';
  $handler->display->display_options['fields']['regex_rewrite']['field'] = 'regex_rewrite';
  $handler->display->display_options['fields']['regex_rewrite']['label'] = 'titre';
  $handler->display->display_options['fields']['regex_rewrite']['alter']['text'] = '[title]';
  $handler->display->display_options['fields']['regex_rewrite']['alter']['text_patterns'] = '/[\\s-]+/';
  $handler->display->display_options['fields']['regex_rewrite']['alter']['text_replacements'] = '-';

  /* Display: Services */
  $handler = $view->new_display('services', 'Services', 'services_1');
  $handler->display->display_options['path'] = 'webform_list_service';
  $translatables['webform_uuid_list'] = array(
    t('Master'),
    t('Webform UUID List'),
    t('plus'),
    t('Appliquer'),
    t('Réinitialiser'),
    t('Trier par'),
    t('Asc'),
    t('Desc'),
    t('Nœud pour webform'),
    t('uuid'),
    t('Titre'),
    t('titre'),
    t('[title]'),
    t('-'),
    t('Services'),
  );
  $export['webform_uuid_list'] = $view;

  return $export;
}
