

window.onload = function(){
    setInterval(function(){
        $('.hidiv').addClass('hidivDisplayed');
    }, 400);

    setInterval(function(){
        $('.introPDiv').addClass('introPDivDisplayed');
    }, 1200);

    setInterval(function(){
        $('.openingSection').addClass('fadeOut');
    }, 2500);

    setInterval(function(){
        $('.openingSection').addClass('hidden');
    }, 0);

    setInterval(function(){
        $('.aboutLink').addClass('shown');
    }, 3300);

    setInterval(function(){
        $('.projectsLink').addClass('shown');
    }, 3600);

    setInterval(function(){
        $('.techLink').addClass('shown');
    }, 3900);

    scrollManager();

};

function scrollManager() {
	var contactSectionFromTop = $('.contactSection').offset().top - window.innerHeight;
    var firstmemoriesLevel = $('.dinnerplansLi').offset().top - window.innerHeight;
    var dinnerplansLevel = $('.concertfinderLi').offset().top - window.innerHeight;
    var concertfinderLevel = $('.technologySection').offset().top - window.innerHeight;
    var technologiesLevel = $('.javascriptDiv').offset().top - window.innerHeight;
    $(window).scroll(function(){
 		var bodyTop = $('body').scrollTop();
 		if( bodyTop > contactSectionFromTop ){
     		chatSlideIn();
 		}
        if( bodyTop > firstmemoriesLevel) {
            firstMemoriesTechSlideIn();
        }
        if( bodyTop > dinnerplansLevel) {
            dinnerplansTechSlideIn();
        }
        if( bodyTop > concertfinderLevel) {
            concertfinderTechSlideIn();
        }
        // if( bodyTop > technologiesLevel) {
        //     technologySlideIn();
        // }
	});
};

function firstMemoriesTechSlideIn(){
    setInterval(function(){
	    $('.reactInFirstMemoriesDiv').addClass('shownTechs');
    }, 200);
    setInterval(function(){
	    $('.nodeInFirstMemoriesDiv').addClass('shownTechs');
    }, 600);
    setInterval(function(){
	    $('.cloudinaryInFirstMemoriesDiv').addClass('shownTechs');
    }, 1000);
}

function dinnerplansTechSlideIn(){
    setInterval(function(){
	    $('.jqueryInDinnerPlansDiv').addClass('shownTechs');
    }, 200);
    setInterval(function(){
	    $('.nodeInDinnerPlansDiv').addClass('shownTechs');
    }, 600);
    setInterval(function(){
	    $('.yummlyInDinnerPlansDiv').addClass('shownTechs');
    }, 1000);
}

function concertfinderTechSlideIn(){
    setInterval(function(){
	    $('.jqueryInConcertFinderDiv').addClass('shownTechs');
    }, 200);
    setInterval(function(){
	    $('.seatgeekInConcertFinderDiv').addClass('shownTechs');
    }, 600);
    setInterval(function(){
	    $('.googleMapsInConcertFinderDiv').addClass('shownTechs');
    }, 1000);
}

// function technologySlideIn(){
//     setInterval(function(){
// 	    $('.frontendTechs').addClass('shownTechSections');
//     }, 200);
//     setInterval(function(){
// 	    $('.backendTechs').addClass('shownTechSections');
//     }, 600);
//     setInterval(function(){
// 	    $('.workflowTechs').addClass('shownTechSections');
//     }, 1000);
// }

function chatSlideIn(){
    setInterval(function(){
	    $('.wanttochat').addClass('slideInChat');
    }, 200);
    setInterval(function(){
	    $('.emailDiv').addClass('slideInEmail');
    }, 600);
    
    setInterval(function(){
	    $('.linkedinDiv').addClass('slideInLinked');
    }, 1000);
    setInterval(function(){
	    $('.emailaddress').addClass('slideInEmailAddress');
    }, 1800);
    setInterval(function(){
	    $('.backToTop').addClass('backToTopShown');
    }, 400);
}


$('.aboutLink').click(function() {
    $('html,body').animate({
        scrollTop: $(".aboutMeSection").offset().top},
        'slow');
});

$('.projectsLink').click(function() {
    $('html,body').animate({
        scrollTop: $(".portfolioSection").offset().top},
        'slow');
});

$('.techLink').click(function() {
    $('html,body').animate({
        scrollTop: $(".technologySection").offset().top},
        'slow');
});

$('.backToTop').click(function() {
    $('html,body').animate({
        scrollTop: $("body").offset().top},
        'slow');
});