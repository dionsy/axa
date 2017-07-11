<?php
/**
 * @file
 * Administrative forms section
 */

/**
 * Implements Administration form for cron notification
 */
function cron_notification_admin_form($form, &$form_state){
    $form['cron_notification_account_container'] = array(
      "#type" => 'fieldset',
      '#title' => 'Account detail',
    );
    $form['cron_notification_account_container']['cron_notification_account_sid'] = array(
      '#title' => 'Account SID',
      '#type' => 'textfield',
      '#description' => 'Enter your twilio account sid',
      '#default_value' => variable_get('cron_notification_account_sid', ''),
      '#required' => TRUE,
    );

    $form['cron_notification_account_container']['cron_notification_account_auth'] = array(
      '#title' => t('Account AUTH'),
      '#type' => 'textfield',
      '#description' => t('Enter your twilio account auth'),
      '#default_value' => variable_get('cron_notification_account_auth', ''),
      '#required' => TRUE,
    );

    $form['cron_notification_account_container']['cron_notification_number'] = array(
      '#title' => t('Your number'),
      '#type' => 'textfield',
      '#description' => t('Enter your twilio number'),
      '#default_value' => variable_get('cron_notification_number', ''),
      '#required' => TRUE,
    );

    $form['cron_notification_country_codes_container'] = array(
      "#type" => 'fieldset',
      '#title' => t('Country code'),
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
    );

    $form['cron_notification_country_codes_container']['cron_notification_country_codes'] = array(
      '#type' => 'checkboxes',
      '#options' => cron_notification_country_codes(TRUE),
      '#default_value' => variable_get('cron_notification_country_codes', array()),
    );


  return system_settings_form($form);
}

function cron_notification_admin_sms_form($form, &$form_state){
  $form['cron_notification_sms'] = array(
    '#type' => 'fieldset', 
    '#title' => 'SMS',
  );

  $form['cron_notification_sms']['cron_notification_sms_text'] = array(
    '#type' => 'textarea', 
    '#title' => 'Text SMS',
    '#default_value' => variable_get('cron_notification_sms_text'),
  );

  return system_settings_form($form);

}
function cron_notification_admin_settings_mail_form($form, &$form_state){
  $form['cron_notification_mail_smtp_container'] = array(
    '#type' => 'fieldset', 
    '#title' => 'SMTP',
  );

  $form['cron_notification_mail_smtp_container']['cron_notification_mail_smtp'] = array(
    '#type' => 'textfield', 
    '#title' => 'Host',
    '#default_value' => variable_get('cron_notification_mail_smtp_container', 'smtp.gmail.com'),
    '#required' => true,
  );

  $form['cron_notification_mail_smtp_container']['cron_notification_mail_port'] = array(
    '#type' => 'textfield',
    '#title' => 'Port',
    '#description' => 'if you use smtp gmail and protocole TLS: enter port 587',
    '#default_value' => variable_get('cron_notification_mail_port', '587'),
    '#required' => true,
  );
  $form['cron_notification_mail_smtp_container']['cron_notification_mail_smtpsecure'] = array(
    '#type' => 'select', 
    '#title' => 'SMTPSecure',
    '#options' => array('tls'=>'TLS', 'ssl'=>'SSL'),
    '#default_value' => variable_get('cron_notification_mail_smtpsecure', array('tls')),
  );

  $form['cron_notification_mail_account_container'] = array(
    '#type' => 'fieldset', 
    '#title' => 'Account Access',
  );

  $form['cron_notification_mail_account_container']['cron_notification_mail_username'] = array(
    '#type' => 'textfield', 
    '#title' => 'Username',
    '#default_value' => variable_get('cron_notification_mail_username'),
    '#required' => true,
  );

  $form['cron_notification_mail_account_container']['cron_notification_mail_password'] = array(
    '#type' => 'password', 
    '#title' => 'Password',
    '#default_value' => variable_get('cron_notification_mail_password', ''),
    '#required' => true,
  );




  return system_settings_form($form);
}

function cron_notification_admin_mail_form($form, &$form_state){
  $form['cron_notification_mail_altbody_container'] = array(
    '#type' => 'fieldset', 
    '#title' => 'Alt',
  );

  $form['cron_notification_mail_altbody_container']['cron_notification_mail_altbody'] = array(
    '#type' => 'textfield', 
    '#title' => 'AltBody',
    '#default_value' => variable_get('cron_notification_mail_altbody', 'This is the alt body in plain text'),
  );

  $form['cron_notification_mail_subject_container'] = array(
    '#type' => 'fieldset', 
    '#title' => t('Subject.'),
  );

  $form['cron_notification_mail_subject_container']['cron_notification_mail_subject'] = array(
    '#type' => 'textfield', 
    '#title' => t('Mail Subject'),
    '#default_value' => variable_get('cron_notification_mail_subject', ''),
  );

  $form['cron_notification_mail_body_container'] = array(
    '#type' => 'fieldset', 
    '#title' => 'Body',      
  );

  $form['cron_notification_mail_body_container']['cron_notification_mail_body'] = array(
    '#type' => 'textarea', 
    '#title' => t('Mail Notification Body.'),
    '#default_value' => variable_get('cron_notification_mail_body', ''),
  );

  return system_settings_form($form);
}