$(function(){
	
	loadImage(
	    "Jugendgruppe.png",
	    function (canvas) {
	        if(canvas.type === "error") {
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
				
				// console.log("Generiere Link...");
				
				var ID = 1234567890
				document.write("http://img.wikunia.de/" + ID + "/" + pw);
				
	        }
	        
	    },
	    {
	        maxWidth: 1000,
	        maxHeight: 1000,
	        canvas: true
	    }
	);
	
})