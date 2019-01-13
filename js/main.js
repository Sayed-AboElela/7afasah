
$(document).ready(function () {

    setTimeout(() => {
        $('.menuBtn-topSection .headerLinksModel').css('display','block');
        
    }, 500);
    


    $('.frstOwlContainer-c .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        items: 1,
        navText: ['<i cla<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    })
    
    
    
    $('#srchBtn-top').click(function (e) {
        e.preventDefault();

        $(this).css({
            'display': 'none',
            'opacity': '0',
            'visibility': 'hidden',
        });

        $(this).next().css({
            'width': '175',
            'opacity': '1',
            'visibility': 'visible',
        });
        

        setTimeout(() => {
            $('#inputSrchTop').focus();
        }, 300);
    });
    
    
    $('#inputSrchTop').focusout(function(){
        
        $(this).parent().css({
            'width' : '0',
            'opacity' : '0',
            'visibility' : 'hidden'
        });
        
        setTimeout(() => {
            $(this).parent().parent().children('#srchBtn-top').css({ 'display' : 'flex'});
        }, 400);

        setTimeout(() => {
            $(this).parent().parent().children('#srchBtn-top').css({
                'opacity' : '1',
                'visibility' : 'visible',

            });
        }, 100);
    });


    
    $('.ourActivits-section .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        rtl:true,
        navText: ['<i cla<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })



    $('.contactPage-section input , .contactPage-section textarea').focus(function(){
        $(this).parent().css({
            'border-color' : '#00a1e3',
        })
        $(this).parent().children('svg').css({
            'fill' : '#00a1e3',
        })
    })
    
    $('.contactPage-section input , .contactPage-section textarea').focusout(function(){
        $(this).parent().css({
            'border-color' : '#f0f0f0',
        })
        $(this).parent().children('svg').css({
            'fill' : '#bfbfbf',
        })
    })
    
});


// scroll fix
$(document).ready(function() {

    var s = $(".aboutUs-section , .fixOurNavHeader");

    var pos = s.position();		

    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top ) {
            $('.header-section').addClass("header-view");
        } else{
            $('.header-section').removeClass("header-view");
        }

    });
});






// header fix
$(document).ready(function(){
    $(window).trigger( "resize" );

    $( window ).resize(function() {
        
        if($(window).width() <= 900){
            
            $('.menuBtn-topSection .headerLinksModel').addClass('mobFix');
            
            $('.menuBtn-topSection .open-nav').click(function(){

                $('.menuBtn-topSection .headerLinksModel.mobFix').addClass('opendSide');

                
                $('.closeSideNav').css({
                    'visibility': 'visible',
                     'opacity': '1',
                });
    
            });
    
            
        }

        if($(window).width() >= 900){
    
            $('.menuBtn-topSection .headerLinksModel').removeClass('mobFix');
            
    
            $('.menuBtn-topSection .open-nav').click(function(){
    
                $('.menuBtn-topSection .headerLinksModel.mobFix').removeClass('opendSide');
    
                $('.closeSideNav').css({
                    'visibility': 'visible',
                     'opacity': '1',
                });
    
            });
    
            
        }


        if($(window).width() <= 481){
            $(".footerLinks .footer-link .collapse").removeClass("in");
        }
       
        if($(window).width() >= 480){
            $(".footerLinks .footer-link .collapse").addClass("in");
        }
       
    });



    if($(window).width() <= 900){
    
        $('.menuBtn-topSection .headerLinksModel').addClass('mobFix');
        $('.menuBtn-topSection .headerLinksModel .container').removeClass('container');
        

        $('.menuBtn-topSection .open-nav').click(function(){

            $('.menuBtn-topSection .headerLinksModel.mobFix').addClass('opendSide');

            $('.closeSideNav').css({
                'visibility': 'visible',
                 'opacity': '1',
            });

        });

        
    }

    if($(window).width() >= 900){

        $('.menuBtn-topSection .headerLinksModel').removeClass('mobFix');
        $('.menuBtn-topSection .headerLinksModel .container').addClass('container');
        

        $('.menuBtn-topSection .open-nav').click(function(){

            $('.menuBtn-topSection .headerLinksModel.mobFix').removeClass('opendSide');

            $('.closeSideNav').css({
                'visibility': 'visible',
                 'opacity': '1',
            });

        });

        
    }

});




function closeSideNav(){
    
    $('.menuBtn-topSection .headerLinksModel.mobFix').removeClass('opendSide');

    $('.closeSideNav').css({
        'visibility': 'hidden',
            'opacity': '0',
    });
};