<?php
	/*
		This file deletes all json files in /images, if they are older than $hours hours
		Can be called from a cronjob
	*/
	
	$hours = 24;
	// get the seconds since 01.01.1970
	$unix_timestamp = time();
	// substract $hours hours
	$time_minus_hours = $unix_timestamp - ($hours*60*60);
	
	// Iterate through the image folder and get all .json files
	$dir = new DirectoryIterator('images');
	foreach ($dir as $fileinfo) {
		// exclude . and ..
		if (!$fileinfo->isDot()) {
			// only json files
			if ($fileinfo->getExtension() == "json") {
				// get creation / modification time (as seconds since 01.01.1970)
				$modified_time = filemtime('images/'.$fileinfo->getFilename());
				// if the modification time is longer ago than $hours hours.
				if ($modified_time < $time_minus_hours) {
					unlink('images/'.$fileinfo->getFilename());
				}
			}
		}
	}