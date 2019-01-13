$(document).ready(function() {
    $("#prdBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#vissionTop").offset().top
        }, 2000);
    });




});




function openSideNav(){
    $('.left-links.xs-NavFix').addClass('sideOPend');
    $('.dvOverBlack').addClass('overOpend');
}

function closeSideNav(){
    $('.left-links.xs-NavFix').removeClass('sideOPend');
    $('.dvOverBlack').removeClass('overOpend');

}