

window.onload = function(){
    setInterval(function(){
        $('.hidiv').addClass('hidivDisplayed');
    }, 500);

    setInterval(function(){
        $('.introPDiv').addClass('introPDivDisplayed');
    }, 1500);

    setInterval(function(){
        $('.openingSection').addClass('fadeOut');
    }, 2500);

    setInterval(function(){
        $('.openingSection').addClass('hidden');
    }, 3500);

    setInterval(function(){
        $('.aboutLink').addClass('linkShown');
    }, 3300);

    setInterval(function(){
        $('.projectsLink').addClass('linkShown');
    }, 3600);

    setInterval(function(){
        $('.techLink').addClass('linkShown');
    }, 3900);

    scrollManager();

};

function scrollManager() {
	var fromTop = $('.contactSection').offset().top - window.innerHeight;
    $(window).scroll(function(){
    
 		var bodyTop = $('body').scrollTop();
    	console.log( bodyTop + ' - ' + fromTop );
 		if( bodyTop > fromTop ){
     		chatSlideIn();
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