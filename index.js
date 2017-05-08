

window.onload = function(){
    setInterval(function(){
        $('.hidiv').addClass('hidivDisplayed');
    }, 500);

    setInterval(function(){
        $('.openingSection').addClass('fadeOut');
    }, 1500);

    setInterval(function(){
        $('.openingSection').addClass('hidden');
    }, 2500);

    scrollManager();

};

function scrollManager() {
	var fromTop = $('.wanttochat').offset().top - window.innerHeight;
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
