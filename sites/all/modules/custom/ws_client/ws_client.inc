<?php
function _clientResource_retrieve($nid/*, $emailUser , $numTel ,$numContrat ,$codeConfidentiel*/) {
	/*	$nomUtilisateur ="massamba";
		$emailUser = "syllababacar@yahoo.fr";
		$numTel = 778241624 ;
		$numContrat = "CNTR00000001";
		$codeConfidentiel = 1234;*/

		$result_json = array('name' => 'test', 'age' => '16');
		/*header('Content-type: application/json');*/
	  /*$get_node_result = ws_client_getClient_node($numContrat);	
	  	$data = json_decode($get_node_result->data);
	if (isset($data)) {
		return $data;
		
	}
	else		*/

      return $result_json;
 }


/*function _clientResource_retrieve($nomUtilisateur, $emailUser , $numTel ,$numContrat ,$codeConfidentiel) {
		$nomUtilisateur ="massamba";
		$emailUser = "syllababacar@yahoo.fr";
		$numTel = 778241624 ;
		$numContrat = "CNTR00000001";
		$codeConfidentiel = 1234;
	  $get_node_result = ws_client_getClient_node($numContrat);	
	  	$data = json_decode($get_node_result->data);
	if (isset($data)) {
		return $data;
		
	}
	else		
      return "No ok" ;
    }*/
