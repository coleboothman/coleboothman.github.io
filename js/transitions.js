(function() {
	
	//transition for contacts page
	$("#contact").click(function() {
		$("#home-page").fadeOut(1000);
		$("#contact-page").delay(1000).fadeIn(1000);
		load_contact_page();
		
		
	
	});

	//transition for projects page
	$("#proj").click(function(){
		$("#home-page").fadeOut(1000);
		$("#project-page").delay(1000).fadeIn(1000);
		load_project_page();
	});

	

	function load_contact_page() {
		//here, we want the page to be visible first, followed by the header, then the icons.
		$("#contact-title").delay(1500).fadeIn(750);
		$("#linked-in").delay(2500).fadeIn(1000);
		$("#gmail").delay(2500).fadeIn(1000);
		$("#github").delay(2500).fadeIn(1000);
		$("#resume").delay(2500).fadeIn(1000);
	}

	function load_project_page() {
		//here, we want the page to be visible first, followed by the header, then the project cards
		$("#proj-header").delay(1500).fadeIn(750);
		$("#project-cards").delay(2500).fadeIn(1000);
	}


	

	$(".img-bounce").click(function() {

		//check which page we are on to make sure we set the display:none for the proper page.
		if($('#contact-page').is(':visible')) {	
			
			//animate fade of header and icons first before page
			$("#contact-title").fadeOut(750);
			$("#linked-in").delay(1000).fadeOut(1000);
			$("#gmail").delay(1000).fadeOut(1000);
			$("#github").delay(1000).fadeOut(1000);
			$("#resume").delay(1000).fadeOut(1000);	

			$("#contact-page").delay(1000).fadeOut(1000);
			$("#home-page").delay(2000).fadeIn(1000);
			
			
			
		}

		if($("#project-page").is(':visible')) {
			
			//animate fade of header and icons first before page
			$("#project-cards").fadeOut(750);
			$("#proj-header").delay(1000).fadeOut(1000);
	

			$("#project-page").delay(1000).fadeOut(1000);
			$("#home-page").delay(2000).fadeIn(1000);
		}

	
	});



})();