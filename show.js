$(function(){
	
	console.log("Extrahiere Informationen aus URL...");
	
	var hash = window.location.hash.substr(1),
		info = hash.split("&"),
		id = info[0],
		key = info[1],
		img = $("#image");
	
	console.log("Rufe Daten ab...");
	
	$.getJSON("images/" + id + ".json", function(data){
		
		data = JSON.stringify(data);
		
		console.log("Dekodiere Daten...");
		var base = sjcl.decrypt(key, data);
		
		console.log("Zeige Bild an...");
		img.attr("src", base);
		
	})
	
	
})