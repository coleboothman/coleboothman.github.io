(function() {
	
	//transition for contacts page
	$("#contact").click(function() {
		$("#home-page").fadeOut(1000);
		$("#contact-page").delay(1000).fadeIn(1000);
		
		//here, we want the page to be visible first, followed by the header, then the icons.
		$("#contact-title").delay(1500).fadeIn(750);
		
		$("#linked-in").delay(2500).fadeIn(1000);
		$("#gmail").delay(2500).fadeIn(1000);
		$("#github").delay(2500).fadeIn(1000);
		$("#resume").delay(2500).fadeIn(1000);
	});


	//transition for projects page
	$("#proj").click(function(){
		$("#home-page").fadeOut(1000);
		$("#project-page").delay(1000).fadeIn(1000);
	});

	$(".img-bounce").click(function() {

		//check which page we are on to make sure we set the display:none for the proper page.
		if($('#contact-page').is(':visible')){	
			$("#contact-page").fadeOut(1000);
			$("#home-page").delay(1000).fadeIn(1000);
			console.log("contract page");
			
		}

		if($("#project-page").is(':visible')) {
			$("#project-page").fadeOut(1000);
			$("#home-page").delay(1000).fadeIn(1000);
			console.log("project page");
		}

	
	});



})();