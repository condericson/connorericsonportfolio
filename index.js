// $(document).ready(function() {

window.onload = function(){
    setInterval(function(){
        $('.hidiv').addClass('hidivDisplayed');
    }, 500);

    setInterval(function(){
        $('.openingSection').addClass('fadeOut');
    }, 2000);

    setInterval(function(){
        $('.openingSection').addClass('hidden');
    }, 3000);
};

// });