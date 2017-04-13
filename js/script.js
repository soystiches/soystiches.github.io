$(document).ready(function() {
    if ($(window).width() > 758) {
        $(window).scroll(function() {
            // if desktop, do stuff
        });
    } else {
        
        $('#topnav').addClass('navbar-fixed-top');
       
    }
});


$(document).ready(function() {
    $(window).scroll(function() {
        var bannerHeight = $('#banner').height();
        console.log(bannerHeight);
        if ($(window).scrollTop() > bannerHeight) {
            $('#topnav').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < bannerHeight) {
            $('#topnav').removeClass('navbar-fixed');
        }
    });
});
