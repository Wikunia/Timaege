$(function(){
	
	console.log("Extract information from URL...");
	
	var hash = window.location.hash.substr(1),
		info = hash.split("&"),
		id = info[0],
		key = info[1],
		img = $("#image");
	
	console.log("Get data...");
	
	$.getJSON("../images/" + id + ".json", function(data){
		
		data = JSON.stringify(data);
		
		console.log("Decrypt data...");
		var base = sjcl.decrypt(key, data);
		
		console.log("Showing image...");
		img.attr("src", base);
		
	})
	
})