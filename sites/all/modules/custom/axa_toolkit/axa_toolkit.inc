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