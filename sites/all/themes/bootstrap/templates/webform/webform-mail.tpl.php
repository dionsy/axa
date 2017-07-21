<?php

/**
 * @file
 * Customize the e-mails sent by Webform after successful submission.
 *
 * This file may be renamed "webform-mail-[nid].tpl.php" to target a
 * specific webform e-mail on your site. Or you can leave it
 * "webform-mail.tpl.php" to affect all webform e-mails on your site.
 *
 * Available variables:
 * - $node: The node object for this webform.
 * - $submission: The webform submission.
 * - $email: The entire e-mail configuration settings.
 * - $user: The current user submitting the form. Always the Anonymous user
 *   (uid 0) for confidential submissions.
 * - $ip_address: The IP address of the user submitting the form or '(unknown)'
 *   for confidential submissions.
 *
 * The $email['email'] variable can be used to send different e-mails to different users
 * when using the "default" e-mail template.
 */
//krumong('main')->kPrint($node);

global $base_url;
$output = '';

$tid= $node->field_type_contrat['und'][0]['tid']; 
$tax=taxonomy_term_load($tid);
$type_contrat = $tax->name;
$logo_url = theme_get_setting('logo_path');
$src=explode('public://', $logo_url);
//$tb_id = $node->data[1][0];
//$tb= taxonomy_term_load($tb_id);
//$type_de_bien = $tb->name;

$demande='';

if($node->nid==9){
	$demande ='<p>[submission:values:type_de_bien:withlabel]</p>
	<p><p>[submission:values:nombre_de_pieces:withlabel]</p>
	<p>[submission:values:ce_logement_est_il_votre_residence_principale:withlabel]</p>
	<p>[submission:values:adresse_du_bien_a_assurer:withlabel]</p>
	<p>[submission:values:vous_etes:withlabel]</p>
	<p>[submission:values:quand_souhaitez_vous_etre_assure:withlabel]</p>';
}
elseif($node->nid==8){
	$demande ='<h3>Type de véhicule</h3>
	<p>[submission:values:marque:withlabel]</p>
	<p>[submission:values:energie_du_vehicule:withlabel]</p>

	<h3>Information du conducteur Principal</h3>

	<p>[submission:values:annee_de_naissance:withlabel]</p>
	<p>[submission:valuesage_dobtention_du_permis:withlabel]</p>
	<p>[submission:values:email_conducteur:withlabel]</p>
	';
}

$logo = '<img class="img_mail" src="'.$base_url.'/sites/default/files/'.$src[1].'"/>';

	$output= '<div class="fond_mail"><div class="corps">'.$logo.'
	 <div class="entete_mail">
	 	<p>Votre demande du [submission:modified_date:medium] :</p>
		<p>Devis '.$type_contrat.'</p>
	</div>

	<div class="merci">
	<p>Cher [submission:values:civilite]. [submission:values:prenom] [submission:values:nom],</p>
	<p>Nous vous remercions de nous avoir consulté.</p>
	<p>Nos conseillers sont à votre disposition et vous contacteront sous 48 heures pour une étude personnalisée.</p>

	</div>

	<div class="conseiller">
		<p>Vous pouvez dès à présent trouver un conseiller proche de chez vous :</p>
	</div>

	<h3>Votre demande</h3>
	<div class="demande">'.$demande.'</div>

	<h3>Vos informations</h3>
	<div class="infos">
		<p>[submission:values:email:withlabel]</p>
		<p>[submission:values:nom:withlabel]</p>
		<p>[submission:values:prenom:withlabel]</p>
		<p>[submission:values:date_de_naissance:withlabel]</p>
		<p>[submission:values:telephone:withlabel]</p>
	</div>

	<div class="right">
		<p>Nous vous remercions pour votre confiance.</p>
		<strong>À très bientôt avec AXA</strong>
	</div>
	</div>
	</div>
';
print $output;

