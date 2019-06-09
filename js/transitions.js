/*
	Hello! 

	Thanks for visiting my website. I made this website as a student back in 2017 
	as a project to learn more about simple front end web development. I am in the 
	ongoing process of cleaning it up (as time permits), so please understand
	some of wacky code as the mishaps of a junior comp sci student! ;) 

	      ....,,
        .::o::;'          .....
       ::::::::        .::::o:::.,
      .::' `:::        :::::::''"
      :::     :       ::'   `.
     .:::     :       :'      ::
    .:::       :     ,:       `::
   .' :        :`. ." :        :::
  .' .:        :  :  .:        : :
  : ::'        ::. :' :        : :
  :: :         :`: :  :        :`:
  :  :         :  ''  :        : '
_.---:         :___   :        :
     :        :`   `--:        :
      : :---: :        : :---: :`---.
      '```  '```      '''   ''''

	Best, 

	Cole

*/

(function() {
	// Page Variables
	let homePage = $('#home-page');
	let contactPage = $('#contact-page');
	let projectPage = $('#project-page');
	let easterEggPage = $('#easter-egg');
	
	// Contact Page Buttons
	let contactHeader = $("#contact-title");
	let linkedInButton = $("#linked-in");
	let gmailButton = $("#gmail");
	let resumeButton = $("#resume");
	let githubButton = $("#github");

	// Project Page
	let projectHeader = $("#proj-header");
	let projectCards = $("#project-cards");

	let returnHomeButton = $(".img-bounce");
	let contactPageButton = $("#contact");
	let projectPageButton = $("#proj");

	// Easter eggs
	let penguins = $("#easter-egg-penguin");
	let comicStrip = $("#comic-strips");


	function loadContactPage() {
		// Fade in title first, then contact buttons.
		contactHeader.delay(1500).fadeIn(750);
		linkedInButton.delay(2500).fadeIn(1000);
		gmailButton.delay(2500).fadeIn(1000);
		githubButton.delay(2500).fadeIn(1000);
		resumeButton.delay(2500).fadeIn(1000);
	}
	
	function loadProjectPage() {
		// Fade in title first, then project cards.
		projectHeader.delay(1500).fadeIn(750);
		projectCards.delay(2500).fadeIn(1000);
	}

	/*
		Page Transitions
	*/

	// Transition to contact page
	contactPageButton.click(function() {
		homePage.fadeOut(1000);
		contactPage.delay(1000).fadeIn(1000);
		loadContactPage();
	});

	// Transition for projects page
	projectPageButton.click(function(){
		homePage.fadeOut(1000);
		projectPage.delay(1000).fadeIn(1000);
		loadProjectPage();
	});

	// Return home transition
	returnHomeButton.click(function() {
		if (contactPage.is(':visible')) {	
			// Fade out header first then contact buttons
			contactHeader.fadeOut(750);
			linkedInButton.delay(1000).fadeOut(1000);
			gmailButton.delay(1000).fadeOut(1000);
			githubButton.delay(1000).fadeOut(1000);
			resumeButton.delay(1000).fadeOut(1000);	

			contactPage.delay(1000).fadeOut(1000);
			homePage.delay(2000).fadeIn(1000);
		
		} else if (projectPage.is(':visible')) {
			projectCards.fadeOut(750);
			projectHeader.delay(1000).fadeOut(1000);
			
			projectPage.delay(1000).fadeOut(1000);
			homePage.delay(2000).fadeIn(1000);
		}
	});

	/*
		Easter Eggs
	*/

	// On page load, choose one of the different silly professions to display.
	let rand0To6 = Math.floor(Math.random() * 8);
	let professions = ["Aerospace Architect.", "CTO of $LARGE_TECH_COMPANY.", "Wall Street Lawyer.", "Hollywood Actor.", 
	"Heart Surgeon.", "Olympic Athlete.", "Famous DJ.", "Cirque du Soleil Acrobat." ]
	document.getElementById("professions").innerHTML = professions[rand0To6];

	//Set a random comic strip initially for the easter egg page.
	let strips = ["images/ch1.png", "images/ch4.png", "images/ch3.jpg", "images/ch2.jpg", "images/ch5.jpg"];
	let rand0To3 = Math.floor(Math.random() * 5);
	document.getElementById("calvin-hobbes").src = strips[rand0To3];

	easterEggPage.click(function() {
		homePage.fadeOut(500);
		penguins.delay(1000).fadeIn(1000);

		penguins.delay(3000).fadeOut(750);
		homePage.delay(5500).fadeIn(1500);
		
	});	
					
	// The first strip ch1.png is a little bit small, so if this one is chosen we want to make it a bit larger.
	if (strips[rand0To3] === "images/ch1.png") {
		let comic = document.getElementById("calvin-hobbes");
		comic.style.width = "90%";
		comic.style.height = "90%";
		comic.style.paddingTop = "0px";
	}

	// Easter egg: Display a Calvin and Hobbes comic strip if the user is idle for more than 50 seconds
	// (no key pressed, or mouse movement)
	let idleTime = 0;
	$(document).ready(function () {
	    //Increment the idle time counter every 25 seconds (on the home page only).
	    if (homePage.is(':visible')) {
	    	let idleInterval = setInterval(timerIncrement, 25000); // 25 seconds.
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
	    if (!(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/))) {
	    	// Only trigger on the homepage.
	    	if (homePage.is(':visible')) {
		    	if (idleTime > 1) { // If the user is idle for more than 1 minute, trigger comic.
					homePage.fadeOut(1000);
			        comicStrip.delay(1000).fadeIn(1000);

			        returnHomeButton.click(function() {
			        	comicStrip.fadeOut(1000);
				        homePage.delay(1000).fadeIn(1000);
				        idleTime = 0;
					});	
		    	}	
		    }
	    }	   
	}

})();
