




// directions ready
$(document).ready(function() {

    setTimeout(() => {
        
    
    
    $(".dirBtnTo-index").click(function() {
        $('html, body').animate({
            scrollTop: $("#dirBtnTo-index").offset().top
        }, 2000);
    });
    
    $(".dirBtnTo-development").click(function() {
        $('html, body').animate({
            scrollTop: $("#dirBtnTo-development").offset().top
        }, 2000);
    });
    
    $(".dirBtnTo-studios").click(function() {
        $('html, body').animate({
            scrollTop: $("#dirBtnTo-studios").offset().top
        }, 2000);
    });
    
    $(".dirBtnTo-social").click(function() {
        $('html, body').animate({
            scrollTop: $("#dirBtnTo-social").offset().top
        }, 2000);
    });
    
    $(".dirBtnTo-ourService").click(function() {
        $('html, body').animate({
            scrollTop: $("#dirBtnTo-ourService").offset().top
        }, 2000);
    });
    
    $("#prdBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#vissionTop").offset().top
        }, 2000);
    });


}, 10);

});




function openSideNav(){
    $('.left-links.xs-NavFix').addClass('sideOPend');
    $('.dvOverBlack').addClass('overOpend');
    $('body').addClass('overOpendBody');
}

function closeSideNav(){
    $('.left-links.xs-NavFix').removeClass('sideOPend');
    $('.dvOverBlack').removeClass('overOpend');
    $('body').removeClass('overOpendBody');

}


function inputFileFixx(){
    $('#joinUsFile').click();
}