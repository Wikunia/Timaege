<?php

	// Pfad zum Bilder-Ordner
	$path = "images/";
	// Dateiendung
	$ext = ".json";

	// Daten entgegen nehmen
	$data = $_POST["data"];
	
	// Eindeutige ID erzeugen
	$id = uniqid();
	
	// In den Ordner speichern
	file_put_contents($path . $id . $ext, $data);
	
	// ID ausgeben
	echo $id;

?>