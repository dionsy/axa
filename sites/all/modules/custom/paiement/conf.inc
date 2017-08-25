<?php

/****
	Fichier de configuration des parametres de Paydunya
**/

$path = libraries_get_path('paydunya-php-master').'/paydunya.php';
$path1 = libraries_get_path('paydunya-php-master').'/paydunya/checkout/checkout_invoice.php';
$path2 = drupal_get_path('module','paydunya_config').'/paydunya_config.module';

require_once($path);
require_once($path2);

//include($path1);
/*$masterKey ='';
$publicKey ='';
$privateKey ='';
*/

/*-------Configuration de l'API------------------------*/
/*Variables recuperées du formulaire de conf*/
$masterKey = variable_get('paydunya_master_key');
$publicKey = variable_get('paydunya_public_key');
$privateKey = variable_get('paydunya_private_key');
$token = variable_get('paydunya_token');
$endPointTest = variable_get('paydunya_end_point_test');
$endPointProd = variable_get('paydunya_end_point_prod');

Paydunya_Setup::setMasterKey($masterKey);
Paydunya_Setup::setPublicKey($publicKey);
Paydunya_Setup::setPrivateKey($privateKey);
Paydunya_Setup::setToken($token);
Paydunya_Setup::setMode($endPointTest); // Optionnel. Utilisez cette option pour les paiements tests.

/*-------------Configuration service activité entreprise-----------------*/
$name = variable_get('paydunya_SAE_Name');
$tagLine = variable_get('paydunya_SAE_Tagline');
$numTel = variable_get('paydunya_SAE_PhoneNumber');
$adressPostal = variable_get('paydunya_SAE_PostalAddress');
$siteWeb = variable_get('paydunya_SAE_WebsiteUrl');
$logUrl = variable_get('paydunya_SAE_LogoUrl');

Paydunya_Checkout_Store::setName($name); // Seul le nom est requis
Paydunya_Checkout_Store::setTagline($tagLine);
Paydunya_Checkout_Store::setPhoneNumber($numTel);
Paydunya_Checkout_Store::setPostalAddress($adressPostal);
Paydunya_Checkout_Store::setWebsiteUrl($siteWeb);
Paydunya_Checkout_Store::setLogoUrl($logUrl);

//-------------------Configuration IPN ------------------ 

$callbackEndPaye = variable_get('paydunya_IPN_callback_finalyzedpaye');

$callbackNotEndPaye = variable_get('paydunya_IPN_callback_notfinalizedpaye');

Paydunya_Checkout_Store::setCallbackUrl($callbackEndPaye);

Paydunya_Checkout_Store::setCallbackUrl($callbackNotEndPaye);

/*dsm($name,'Nom');
dsm($callbackEndPaye,'End PAye');
dsm($callbackNotEndPaye,'Not end paye');
dsm($masterKey ,'MAster key');
dsm($publicKey,'public key');
dsm($privateKey,' private key');
dsm($token,'Token');
*/
