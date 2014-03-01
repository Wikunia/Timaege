$(function(){
	
	// The URL, where this project is hosted
	var BASEURL = "http://img.wikunia.de";
	// Element, where the link will be posted
	var linkBox = $('#link');
	
	// Trigger the file input on click
	$("#picker").click(function(){
		$("#chooseImage").trigger("click");
	})
	
	// Eventhandler for choosing a file
	$("#chooseImage").change(function(e){
		handleUpload(e.target.files[0]);
	});

	function handleUpload(target){
        // start the progress
        starting();
        // Change first text
        startProgress($('#load'));
        // load image
		loadImage(
			target,
			function (canvas) {
				if(canvas.type === "error") {
					// Error handling
					console.log("Error loading image!");
				} else {
					
					// Show the image on the page
					//document.body.appendChild(canvas);
					
					console.log("Generating password...");
					// Generate a password with 10 to 15 characters
					var pw = Password.generate();
					
					console.log("Image processing...");
					var dataURL = canvas.toDataURL('image/png');
					
                    // Change second text
                    startProgress($('#send'));
                    
					console.log("Encrypting image...");
					var encrypted = sjcl.encrypt(pw, dataURL);
					
					console.log("Send image to server...");
					$.post("save.php", {data : encrypted},
                           function(ID){
                                // Change third text
                                startProgress($('#done'));

                                console.log("Generating link...");
                                var link = BASEURL + "/s/#" + ID + "&" + pw;
                                linkBox.val(link);
                            }
                    )
					
				}

			},
			{
				maxWidth: 1000,
				maxHeight: 1000,
				canvas: true
			}
		);
	}
    
    
    function startProgress(element){
        
        var text = element.data("text");
        element.addClass("progress");
        element.text(text);
        
    }
	
    function starting(){
        $('#rest').addClass("vanish");
    }
    
    
    
    // Drag and Drop functionality on page
    $("body").on("dragover", function(e){
        e.stopPropagation();
        e.preventDefault();
		$('#drop').addClass("dragover");
	});
    
    $("body").on("dragleave", function(e){
        e.stopPropagation();
        e.preventDefault();
		$('#drop').removeClass("dragover");
	});
    
    $("body").on("drop", function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#drop').removeClass("dragover");
		handleUpload(e.dataTransfer.files[0]);
	});
    
    
})