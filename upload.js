$(function(){
	
	$("#chooseBild").change(function(e){
		handleUpload(e.target.files[0]);
	});
	
	
	function handleUpload(target){
		loadImage(
			target,
			function (canvas) {
				if(canvas.type === "error") {
					// Bei einem Fehler eine Fehlermeldung ausgeben
					console.log("Error loading image!");
				} else {
					
					// Bild auf der Seite anzeigen
					document.body.appendChild(canvas);
					
					console.log("Generiere Passwort...");
					// Passwort generieren
					// Da keine Länge spezifiziert ist, wird ein Passwort
					// zwischen 10 und 15 Zeichen generiert.
					var pw = Password.generate();
					
					console.log("Wandle Bild um...");
					var dataURL = canvas.toDataURL('image/png');
					
					console.log("Verschluessele Bild...");
					var encrypted = sjcl.encrypt(pw, dataURL);
					
					// console.log("Sende Bild zum Server...");
					$.post("save.php", {"data" : encrypted}, function(ID){
						
						// console.log("Generiere Link...");
						console.log("http://img.wikunia.de/" + ID + "/" + pw);
						
					})
					
		        }
		        
		    },
		    {
		        maxWidth: 1000,
		        maxHeight: 1000,
		        canvas: true
		    }
		);
	}
	
})