<?php

	// Pfad zum Bilder-Ordner
	$path = "images/";
    if (!is_dir($path)) {
       mkdir($path); 
    }

	// Dateiendung
	$ext = ".json";

	// Daten entgegen nehmen
	$data = $_POST["data"] or die("cannot read data");
	
	// Eindeutige ID erzeugen
	$id = uniqid();
	
	// In den Ordner speichern
	file_put_contents($path . $id . $ext, $data) or die("cannot write data");
	
	// ID ausgeben
	echo $id;

?>