$(function(){
	
	// The URL, where this project is hosted
	var BASEURL = "http://img.wikunia.de";
	// Element, where the link will be posted
	var linkBox = $('#link');
	
	// Eventhandler for choosing a file
	$("#chooseImage").change(function(e){
		handleUpload(e.target.files[0]);
	});

	function handleUpload(target){
		loadImage(
			target,
			function (canvas) {
				if(canvas.type === "error") {
					// Error handling
					console.log("Error loading image!");
				} else {
					
					// Show the image on the page
					document.body.appendChild(canvas);
					
					console.log("Generating password...");
					// Generate a password with 10 to 15 characters
					var pw = Password.generate();
					
					console.log("Image processing...");
					var dataURL = canvas.toDataURL('image/png');
					
					console.log("Encrypting image...");
					var encrypted = sjcl.encrypt(pw, dataURL);
					
					console.log("Send image to server...");
					$.post("save.php", {"data" : encrypted}, function(ID){
						
						console.log("Generating link...");
						var link = BASEURL + "/s/#" + ID + "&" + pw;
						linkBox.text(link);
						
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