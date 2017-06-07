(function() {
	
	//transition for contacts page
	$("#contact").click(function() {
		$("#home-page").fadeOut(1000);
		$("#contact-page").fadeIn(1000);
	});


	//transition for projects page
	$("#proj").click(function(){
		$("#home-page").fadeOut(1000);
		$("#project-page").fadeIn(1000);
	});

	$(".img-bounce").click(function() {

		//check which page we are on to make sure we set the display:none for the proper page.
		if($('#contact-page').is(':visible')){	
			$("#contact-page").fadeOut(1000);
			$("#home-page").fadeIn(1000);
			console.log("contract page");
			
		}

		if($("#project-page").is(':visible')) {
			$("#project-page").fadeOut(1000);
			$("#home-page").fadeIn(1000);
			console.log("project page");
		}

	
	});



})();