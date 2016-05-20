   $(document).ready(function() {



       $(".selct1").mouseover(function() {
           $(".selct1").removeClass(" selct");
           $(".down-con").css("display", "none");
           $(this).addClass(" selct");
           $(this).find(".down-con").css("display", "block");
       });
       $(".selct1").mouseout(function() {
           $(".selct1").removeClass(" selct");
           $(this).find(".down-con").css("display", "none");
       });




       var ie6 = document.all;
       var dv = $('#fixedMenu'),
           st;
       dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
       $(window).scroll(function() {
           st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
           if (st > parseInt(dv.attr('otop'))) {
               if (ie6) {
                   dv.css({
                       position: 'absolute',
                       top: 35
                   });
               } else if (dv.css('position') != 'fixed') dv.css({
                   'position': 'fixed',
                   top: 35
               });
           } else if (dv.css('position') != 'fixed') dv.css({
               'position': 'fixed',
               top: 35
           });
       });




       $(".nav-toggle").click(function() {
           $(".m-nav").slideToggle();
       });



       $(".w-box").mouseover(function() {
           $(this).find(".l-box").css("opacity", "0.5");
           $(this).find(".c-box").css("opacity", "1").stop().animate({
               left: '68px'
           });
           $(this).find(".s-box").css("opacity", "1").stop().animate({
               right: '95px'
           });
       });
       $(".w-box").mouseleave(function() {
           $(this).find(".l-box").css("opacity", "0");
           $(this).find(".c-box").stop().animate({
               left: '-23px'
           }).css("opacity", "0");
           $(this).find(".s-box").stop().animate({
               right: '-10px'
           }).css("opacity", "0");
       });


       var  rotate = 0;
       $(".close_kefu img").click(function() {
        rotate += 180;
        $(this).css({'transform': 'rotate(' + rotate+ 'deg)'});
           $(".fixed_kefu_2").slideToggle();
       });



       /******************回到顶部*************************/

    $('.to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    //scroll to top
    $('.to-top').hide();  
    $(window).scroll(function() {
        if ($(this).scrollTop() > 120) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    });
    $('.to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
   });
