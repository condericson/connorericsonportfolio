

window.onload = function(){
    setInterval(function(){
        $('.hidiv').addClass('hidivDisplayed');
    }, 500);

    setInterval(function(){
        $('.openingSection').addClass('fadeOut');
    }, 0);

    setInterval(function(){
        $('.openingSection').addClass('hidden');
    }, 3000);

    scrollManager();

};

function scrollManager() {
	var oTop = $('.wanttochat').offset().top - window.innerHeight;
    $(window).scroll(function(){
    
 		var pTop = $('body').scrollTop();
    	console.log( pTop + ' - ' + oTop );
 		if( pTop > oTop ){
     		start_count();
 		}
	});
};

function start_count(){
    setInterval(function(){
	    $('.wanttochat').addClass('slideIn');
    }, 200);
}
