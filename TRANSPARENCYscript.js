$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    // 1. 変数slideIndexに「.active」要素のインデックス番号を代入してください
    var slideIndex=$(".slide").index($(".active"));

    // 3. change-btn要素を表示してください
    $(".change-btn").show();

    // 2. ifとelse ifを用いて、「.change-btn」の表示/非表示をおこなってください
    if (slideIndex==0){
      $(".prev-btn").hide();
    }else if(slideIndex==4){
      $(".next-btn").hide();
    }

  });

  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }

    // 「.index-btn」のクリックイベントと同様の処理を記述してください
      var slideIndex=$(".slide").index($(".active"));
      $(".change-btn").show();
     if (slideIndex==0){
      $(".prev-btn").hide();
    }else if(slideIndex==4){
      $(".next-btn").hide();
    }

  });

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
//下からフェード画像2↓//
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
//下からフェード画像2↑//
//下からフェード画像3↓//
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
//下からフェード画像3↑//
//下からフェード画像4↓//
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
//下からフェード画像4↑//
//下からフェード画像5↓//
$(window).scroll(function (){
       $('.fadein5').each(function(){
           var targetElement = $(this).offset().top;
           var scroll = $(window).scrollTop();
           var windowHeight = $(window).height();
           if (scroll > targetElement - windowHeight + 200){
               $(this).css('opacity','1');
               $(this).css('transform','translateY(0)');
           }
       });
   });
//下からフェード画像5↑//
//下からフェード画像6↓//
$(window).scroll(function (){
       $('.fadein6').each(function(){
           var targetElement = $(this).offset().top;
           var scroll = $(window).scrollTop();
           var windowHeight = $(window).height();
           if (scroll > targetElement - windowHeight + 200){
               $(this).css('opacity','1');
               $(this).css('transform','translateY(0)');
           }
       });
   });
//下からフェード画像6↑//

});
