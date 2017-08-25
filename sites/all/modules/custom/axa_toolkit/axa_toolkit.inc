<?php
/**
* Callback for creating sinistre services.
*
* @param object $data
* @return object
*/
function _sinistre_service_create($data) {
   
    return (object)array(
      'id' => 'test',
    );
} 
/**
* Callback for creating devis services.
*
* @param object $data
* @return object
*/
function _devis_service_create($data) {
    $ids =  entity_uuid_load('node', array($data['webformTitle']), array());
    $components = reset($ids)->webform['components'];
    $nid = reset($ids)->webform['nid'];
    $node =  node_load($nid);

    global $user;
   // Keys in this array are the same keys on the fields in the webform
    $formdata = array();
    foreach ($components as $value) {
      $formdata[$value['form_key']]=$data['form_key'];
    } 
    module_load_include('inc', 'webform', 'webform.module');
    module_load_include('inc', 'webform', 'includes/webform.submissions');
    // This methods will arrange $data in the right way
    $formdata = _webform_client_form_submit_flatten($node, $formdata);
    $formdata = webform_submission_data($node, $formdata);
    
    $submission = (object) array(
      'nid' => $nid,
      'uid' => $user->uid,
      'sid' => NULL,
      'submitted' => REQUEST_TIME,
      'completed' => REQUEST_TIME,
      'remote_addr' => ip_address(),
      'is_draft' => FALSE,
      'data' => $formdata,
    );
    $sid = webform_submission_insert($node, $submission);
    return $sid ;
} 