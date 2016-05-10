   $(document).ready(function() {

       $(function() {

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
       });


       $(function() {

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
       });


       $(function() {
           $(".nav-toggle").click(function() {
               $(".m-nav").slideToggle();
           });
       });
   })
