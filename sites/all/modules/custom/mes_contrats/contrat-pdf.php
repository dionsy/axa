<?php
    //module_load_include('module','ws_client');

    //ws_client_get_liste_contrats();

	$path = libraries_get_path('fpdf').'/fpdf.php';
	require($path);
	 
	$pdf=new FPDF();
	$pdf->AddPage();
	$pdf->SetFont('Arial','B',16);
	$pdf->Cell(40,10,'Hello World!');
	$pdf->Output();

?>
