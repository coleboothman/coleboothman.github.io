(function() {
	
	// On page load, choose one of the different funny professions to display.
	var rand0to6 = Math.floor(Math.random() * 8);
	var professions = ["Aerospace Engineer.", "CTO of Google™.", "Wall Street Lawyer.", "Hollywood Actor.", "Heart Surgeon.", "Olympic Athlete.", "Famous DJ.", "Cirque du Soleil Acrobat." ]
	document.getElementById("professions").innerHTML = professions[rand0to6];

	//Set a random comic strip initially for the easter egg page.
	var strips = ["images/ch1.png", "images/ch4.png", "images/ch3.jpg", "images/ch2.jpg", "images/ch5.jpg"];
	var rand0to3 = Math.floor(Math.random() * 5);
	document.getElementById("calvin-hobbes").src = strips[rand0to3];



	$("#easter-egg").click(function() {
		$('#home-page').fadeOut(500);
		$("#easter-egg-penguin").delay(1000).fadeIn(1000);

		$("#easter-egg-penguin").delay(3000).fadeOut(750);
		$("#home-page").delay(5500).fadeIn(1500);
		
	});	



					
	//ch1.png is a little bit small, so if this one is chosen we want to make it a bit larger.
	console.log(strips[rand0to3]);
	if (strips[rand0to3] === "images/ch1.png") {
		var comic = document.getElementById("calvin-hobbes");
		comic.style.width = "90%";
		comic.style.height = "90%";
		comic.style.paddingTop = "0px";
	}


	// Easter egg: Display a Calvin and Hobbes comic strip if the user is idle for more than 50 seconds
	// (no key pressed, or mouse movement)
	var idleTime = 0;
	$(document).ready(function () {
	    //Increment the idle time counter every 25 seconds (on the home page only).
	    if($('#home-page').is(':visible')) {
	    	var idleInterval = setInterval(timerIncrement, 25000); // 25 seconds.

		    //Zero the idle timer on mouse movement.
		    $(this).mousemove(function (e) {
		        idleTime = 0;
		    });
		    $(this).keypress(function (e) {
		        idleTime = 0;
		    });
	    }
	   
	});


	function timerIncrement() {
	    idleTime = idleTime + 1;
	    
	    //we only want to display comics for Desktop and Not mobiles.
	    if(!(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/))) {
	    	
	    	// Only trigger on the homepage.
	    	if ($('#home-page').is(':visible')) {
		    	if (idleTime > 1) { // If the user is idle for more than 1 minute, trigger comic.
			    	//transitions
					$("#home-page").fadeOut(1000);
			        $("#comic-strips").delay(1000).fadeIn(1000);

					//transitions for going back to home page.
			        $(".img-bounce").click(function() {
			        	$("#comic-strips").fadeOut(1000);
				        $("#home-page").delay(1000).fadeIn(1000);
				        idleTime = 0;
					});	
		    	}	
		    }
	    }

	
	   
	}

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