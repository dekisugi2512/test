
// slick
$(function() {
  // slickをランダムにする
  var ar = $('.slideshow').children();
  ar.sort(function(){
  return Math.random()-Math.random();
  });
  for(i=0; i < ar.length; i++) {
  $('.slideshow').html(ar)
  }

$('.top_slick').slick({
  slidesToShow: 1,
  arrows: true,
  prevArrow: '<img src="../img/prev.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="../img/next.png" class="slide-arrow next-arrow">',
  autoplay: true,
  speed: 1000,
  dots: true,
  centerMode: true,
  centerPadding: '8%',

});
});
//スクロールでヘッダー等の高さ分戻す
jQuery(function(){
    var windowWidth = $(window).width();
    var windowSm = 736; // スマホに切り替わる横幅
      if (windowWidth <= windowSm) {
        var headerHight = 75; // スマホのヘッダー等の高さ分の数値を入れる
       } else {
        var headerHight = 75; // PC のヘッダー等の高さ分の数値を入れる
      }
    jQuery('a[href^="#"]').click(function() {
    var speed = 500;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
   });
});
$(function(){
        $("#datepicker").datepicker(

        );
        $("#datepicker2").datepicker(

        );
    });
$(function(){
    $(".faq_list p.question").addClass("open");
    $('.faq_list .answer').hide();
    $('.faq_list p.question').click(function(e) {
    $(this).toggleClass("close");
    $('+.answer', this).slideToggle(400);
    })
  });
