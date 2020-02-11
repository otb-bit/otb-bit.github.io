$(function() {
//下からフェード画像１↓//
$(window).scroll(function (){
       $('.mum3').each(function(){
           var targetElement = $(this).offset().top;
           var scroll = $(window).scrollTop();
           var windowHeight = $(window).height();
           if (scroll > targetElement - windowHeight + 200){
               $(this).css('opacity','1');
               $(this).css('transform','translateY(0)');
           }
       });
   });
//下からフェード画像１↑//

//下からフェード画像２↓//
$(window).scroll(function (){
          $('.mum4').each(function(){
              var targetElement = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > targetElement - windowHeight + 200){
                  $(this).css('opacity','1');
                  $(this).css('transform','translateY(0)');
              }
          });
      });
//下からフェード画像２↑//
//下からフェード画像３↓//
      $(window).scroll(function (){
             $('.mum5').each(function(){
                 var targetElement = $(this).offset().top;
                 var scroll = $(window).scrollTop();
                 var windowHeight = $(window).height();
                 if (scroll > targetElement - windowHeight + 200){
                     $(this).css('opacity','1');
                     $(this).css('transform','translateY(0)');
                 }
             });
         });
//下からフェード画像３↑//






});
