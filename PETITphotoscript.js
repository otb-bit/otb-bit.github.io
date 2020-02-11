$(function() {
  $(window).on('scroll', function (){

    var elem = $('.photo-logo-r');
    var isAnimate = 'isAnimate';

    elem.each(function () {

      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if(scrollPos > elemOffset - wh + (wh /5) ){
        $(this).addClass(isAnimate);
      }
    });

  });


  $(window).on('scroll', function (){

    var elem = $('.photo-p');
    var isAnimate = 'isAnimate2';

    elem.each(function () {

      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if(scrollPos > elemOffset - wh + (wh / 4) ){
        $(this).addClass(isAnimate);
      }
    });

  });
});
