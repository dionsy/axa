<?php
/**
* Callback for creating sinistre services.
*
* @param object $data
* @return object
*/
function _sinistre_service_create($data) {
    module_load_include('module', 'ws_client', 'ws_client');
    $res =  ws_client_declarer_sinistre($data);
    return $res;
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

    $identifiant = "" ;

    if($data['uid']){
        $account = user_load($data['uid']);
        $identifiant = $account->field_identifiant_client['und'][0]['value'] ;
    }
    // Keys in this array are the same keys on the fields in the webform
    $formdata = array();
    foreach ($components as $value) {
      $formdata[$value['form_key']]=$data[$value['form_key']];
    } 
    module_load_include('module', 'ws_client', 'ws_client');
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
    // $sid = webform_submission_insert($node, $submission);
    $result = ws_client_createDevis($nid , $submission , $identifiant);
    if($result->code >=  300 )
    {
     return services_error("verifier les champs", $result->code,$result);
    }
    if ($result->code >100 && $result->code <300) {
      return $result ;
    }
    else {
     return services_error("Network error", $result->code);
    }

} 
/**
* Callback for creating devis services.
*
* @param object $data
* @return object
*/
function _preference_service_create($data) {
    $ids =  entity_uuid_load('node', array($data['webformTitle']), array());
    $components = reset($ids)->webform['components'];
    $nid = reset($ids)->webform['nid'];
    $node =  node_load($nid);

    $identifiant = "" ;

    if($data['uid']){
        $account = user_load($data['uid']);
        $identifiant = $account->field_identifiant_client['und'][0]['value'] ;
    }
    // Keys in this array are the same keys on the fields in the webform
    $formdata = array();
    foreach ($components as $value) {
      $formdata[$value['form_key']]=$data[$value['form_key']];
    } 
    module_load_include('module', 'ws_client', 'ws_client');
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
     return $sid;
}