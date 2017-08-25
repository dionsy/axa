<?php
/**
 * @file
 * Administrative forms section
 */

/**
 * Implements Administration form for ws client
 */
function ws_client_admin_form($form, &$form_state){
    $form['ws_client_end_point'] = array(
      "#type" => 'fieldset',
      '#title' => 'WS Client end point',
    );

    $form['ws_client_end_point']['ip_server'] = array(
      '#title' => 'IP Server',
      '#type' => 'textfield',
      '#description' => 'Entrer l\'adresse IP du serveur(crm)',
      '#default_value' => variable_get('ip_server', '192.168.43.145'),
      '#required' => TRUE,
    );

    $form['ws_client_end_point']['root'] = array(
      '#title' => 'Racine',
      '#type' => 'textfield',
      '#default_value' => variable_get('root', 'ServicesCompte.svc'),
      '#required' => TRUE,
    );

    $form['create'] = array(
      "#type" => 'fieldset',
      '#title' => 'URI de Création',
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
    );

    $form['create']['create_devis_auto'] = array(
      '#title' => 'Creation de devis auto du client',
      '#type' => 'textfield',
      '#default_value' => variable_get('create_devis_auto', 'devisAuto/create'),
      '#required' => TRUE,
    );

    $form['create']['create_devis_habitation'] = array(
      '#title' => 'Creation de devis habitation du client',
      '#type' => 'textfield',
      '#default_value' => variable_get('create_devis_habitation', 'devisHabitation/create'),
      '#required' => TRUE,
    );

    $form['create']['create_devis_accident'] = array(
      '#title' => 'Creation de devis assistance et accident du client',
      '#type' => 'textfield',
      '#default_value' => variable_get('create_devis_habitation', 'devisAssistanceAccident/create'),
      '#required' => TRUE,
    );

    $form['create']['create_devis_loisir'] = array(
      '#title' => 'Creation de devis loisir et vie du client',
      '#type' => 'textfield',
      '#default_value' => variable_get('create_devis_habitation', 'devisLoisirs/create'),
      '#required' => TRUE,
    );

    $form['create']['declarer_sinistre'] = array(
      '#title' => 'Déclarer sinistre',
      '#type' => 'textfield',
      '#default_value' => variable_get('declarer_sinistre', 'sinistre/create'),
      '#required' => TRUE,
    );

    $form['retrieve'] = array(
      "#type" => 'fieldset',
      '#title' => 'URI de récupération d\'informations',
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
    );

    $form['retrieve']['retrieve_client_id'] = array(
      '#title' => 'Récupération de l\'ID du client' ,
      '#type' => 'textfield',
      '#default_value' => variable_get('retrieve_client_id', 'compte/espaceClient/id'),
      '#required' => TRUE,
    );

    $form['retrieve']['retrieve_info_user'] = array(
      '#title' => 'Information du client',
      '#type' => 'textfield',
      '#default_value' => variable_get('retrieve_info_user', 'compte/espaceClient/infos'),
      '#required' => TRUE,
    );

    $form['retrieve']['retrieve_liste_contrats'] = array(
      '#title' => 'Liste des contrats du client',
      '#type' => 'textfield',
      '#default_value' => variable_get('retrieve_liste_contrats', 'listeContrats'),
      '#required' => TRUE,
    );

    $form['retrieve']['retrieve_liste_devis'] = array(
      '#title' => 'Liste des devis du client',
      '#type' => 'textfield',
      '#default_value' => variable_get('retrieve_liste_devis', 'listeDevis'),
      '#required' => TRUE,
    );

    $form['retrieve']['retrieve_liste_echeances'] = array(
      '#title' => 'Liste des échéances du client',
      '#type' => 'textfield',
      '#default_value' => variable_get('retrieve_liste_echeances', 'listeEcheances'),
      '#required' => TRUE,
    );

    $form['retrieve']['retrieve_conseiller'] = array(
      '#title' => 'Récupération des informations du conseiller',
      '#type' => 'textfield',
      '#default_value' => variable_get('retrieve_conseiller', 'conseiller'),
      '#required' => TRUE,
    );

    $form['update'] = array(
      "#type" => 'fieldset',
      '#title' => 'URI de modification des informations',
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
    );

    $form['update']['update_info_user'] = array(
      '#title' => 'Modification des informations du client',
      '#type' => 'textfield',
      '#default_value' => variable_get('update_info_user', 'compte/update'),
      '#required' => TRUE,
    );

  return system_settings_form($form);
}