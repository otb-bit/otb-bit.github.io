$(function() {


//下からフェード文字p↓//
$(window).on('scroll', function (){

      var elem = $('.p');
      var isAnimate = 'isAnimate2';

      elem.each(function () {

        var elemOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        if(scrollPos > elemOffset - wh + (wh /4) ){
          $(this).addClass(isAnimate);
        }
      });
});
//下からフェード文字↑//

//下からフェード画像１↓//
$(window).scroll(function (){
       $('.fadein').each(function(){
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
          $('.fadein2').each(function(){
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
             $('.fadein3').each(function(){
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
//下からフェード画像４↓//
         $(window).scroll(function (){
                $('.fadein4').each(function(){
                    var targetElement = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > targetElement - windowHeight + 200){
                        $(this).css('opacity','1');
                        $(this).css('transform','translateY(0)');
                    }
                });
            });
//下からフェード画像４↑//
});
