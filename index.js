

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
    }, 35000);

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
    var project1 = $('.firstmemoriesdescriptiondiv').offset().top - window.innerHeight;
    $(window).scroll(function(){
    
 		var bodyTop = $('body').scrollTop();
 		if( bodyTop > contactSectionFromTop ){
     		chatSlideIn();
 		}
        if( bodyTop > project1) {
            firstMemoriesTechSlideIn();
        }
	});
};

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

}

function firstMemoriesTechSlideIn(){
    setInterval(function(){
	    $('.reactInFirstMemoriesDiv').addClass('shown');
    }, 700);
    setInterval(function(){
	    $('.nodeInFirstMemoriesDiv').addClass('shown');
    }, 1200);

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