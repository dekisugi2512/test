$(function() {
  $(window).bind('beforeunload', function(event) {
    var display_state = $('#modal-target').css('display');
    if (display_state === 'block') {
      return event.returnValue = "終了してよろしいですか？"
    }
  });
});





$(function() {
  // スクロールバーの横幅を取得
  // $('html').append('<div class="scrollbar" style="overflow:scroll;"></div>');
  // var scrollsize = window.innerWidth - $('.scrollbar').prop('clientWidth');
  //     $('.scrollbar').hide();
  // 	  var slider = $('.thumb-item').slick({
  // infinite: true,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // arrows: false,
  // fade: false,
  // asNavFor: ".thumb-item-nav"
  // });
  // 	    var slider2 = $('.thumb-item-nav').slick({
  // accessibility: true,
  // autoplay: true,
  // autoplaySpeed: 4000,
  // speed: 400,
  // arrows: true,
  // infinite: true,
  // slidesToShow: 6,
  // slidesToScroll: 1,
  // asNavFor: ".thumb-item",
  // focusOnSelect: true,
  // });

  // 「.modal-open」をクリック
  $('.modal_btn').click(function() {
    $("body, html").css("overflow", "hidden");
    // slider.css('opacity',0);
    //        slider.animate({'z-index':1},300,function(){
    //            slider.slick('setPosition');
    //            slider.animate({'opacity':1});
    //        });
    // slider2.css('opacity',0);
    //        slider2.animate({'z-index':1},300,function(){
    //            slider2.slick('setPosition');
    //            slider2.animate({'opacity':1});
    //        });
    $('#modal-open').css('display', 'block');

    // html、bodyを固定（overflow:hiddenにする）
    $('html, body').addClass('lock');

    // オーバーレイ用の要素を追加
    $('body').append('<div class="modal-overlay"></div>');


    // オーバーレイをフェードイン
    // $('.modal-overlay').fadeIn('slow');

    // モーダルコンテンツのIDを取得
    var modal = '#' + $(this).attr('data-target');

    // モーダルコンテンツを囲む要素を追加
    $(modal).wrap("<div class='modal-wrap'></div>");

    // モーダルコンテンツを囲む要素を表示
    $('.modal-wrap').show();
    $('.modal-wrap').animate({
      'width': '100vw',
      'height': '100vh'
    });

    // モーダルコンテンツの表示位置を設定
    modalResize();

    // モーダルコンテンツフェードイン
    $(modal).fadeIn('slow');

    // モーダルコンテンツをクリックした時はフェードアウトしない
    $(modal).click(function(e) {
      e.stopPropagation();
    });

    // 「.modal-overlay」あるいは「.modal-close」をクリック
    $('.modal-wrap, .modal-close, .anchor').off().click(function() {
      $("body, html").css("overflow", "auto");
      // モーダルコンテンツとオーバーレイをフェードアウト
      $(modal).fadeOut('slow');
      // $('.modal-wrap').animate({
      //   'width': '0',
      //   'height': ' 0'
      // });
      $('.modal-overlay').fadeOut('slow', function() {
        // html、bodyの固定解除
        $('html, body').removeClass('lock');
        // オーバーレイを削除
        $('.modal-overlay').remove();
        // モーダルコンテンツを囲む要素を削除
        $(modal).unwrap("<div class='modal-wrap'></div>");

        //コンテンツを一度すべて非表示にし、
        $('.content-car li:nth-child(2)').css('display', 'none');

        //クリックされたタブと同じ順番のコンテンツを表示します。
        $('.content-car li:nth-child(1)').css('display', 'block');

        //一度タブについているクラスselectを消し、
        $('.tab li:nth-child(2)').removeClass('select');

        //クリックされたタブのみにクラスselectをつけます。
        $('.tab li:first-child').addClass('select');


      });
    });

    // リサイズしたら表示位置を再取得
    $(window).on('resize', function() {
      modalResize();
    });

    // モーダルコンテンツの表示位置を設定する関数
    function modalResize() {
      // ウィンドウの横幅、高さを取得
      var w = $(window).width();
      var h = $(window).height();

      // モーダルコンテンツの横幅、高さを取得
      var mw = $(modal).outerWidth(true);
      var mh = $(modal).outerHeight(true);

      // モーダルコンテンツの表示位置を設定
      if ((mh > h) && (mw > w)) {
        $(modal).css({
          'left': 0 + 'px',
          'top': 0 + 'px'
        });
      } else if ((mh > h) && (mw < w)) {
        var x = (w - scrollsize - mw) / 2;
        $(modal).css({
          'left': x + 'px',
          'top': 0 + 'px'
        });
      } else if ((mh < h) && (mw > w)) {
        var y = (h - scrollsize - mh) / 2;
        $(modal).css({
          'left': 0 + 'px',
          'top': y + 'px'
        });
      } else {
        var x = (w - mw) / 2;
        var y = (h - mh) / 2;
        $(modal).css({
          'left': x + 'px',
          'top': y + 'px'
        });
      }
    }

  });

  // 予約カレンダーのモーダル
  $('.button-link').click(function() {
    // $("body, html").css("overflow","hidden");
    // slider.css('opacity',0);
    //        slider.animate({'z-index':1},300,function(){
    //            slider.slick('setPosition');
    //            slider.animate({'opacity':1});
    //        });
    // slider2.css('opacity',0);
    //        slider2.animate({'z-index':1},300,function(){
    //            slider2.slick('setPosition');
    //            slider2.animate({'opacity':1});
    //        });
    $('#modal-open').css('display', 'block');

    // html、bodyを固定（overflow:hiddenにする）
    // $('html, body').addClass('lock');

    // オーバーレイ用の要素を追加
    // $('body').append('<div class="modal-overlay_filter"></div>');

    // オーバーレイをフェードイン
    $('.modal-overlay_filter').show();
    // $('.MDL_window_wrap_filter').animate({
    //   'bottom': '0'
    // },);

    // モーダルコンテンツのIDを取得
    var modal = '#' + $(this).attr('data-target');

    // モーダルコンテンツを囲む要素を追加
    // $(modal).wrap("<div class='modal-wrap_filter'></div>");

    // モーダルコンテンツを囲む要素を表示
    $('.modal-wrap_filter').show();

    // モーダルコンテンツの表示位置を設定
    // modalResize();

    // モーダルコンテンツフェードイン
    $(modal).show();
    $('.MDL_window_wrap_filter').animate({
      'width': '50vw',
      'height': '50vh',
    });
    setTimeout(function() {
      $('.modal-content').append('<div class="modal-overlay_filter"></div>');
      $('.modal-overlay_filter').animate({
        'opacity': '1'
      }, 600);
    }, 500);

    // モーダルコンテンツをクリックした時はフェードアウトしない
    $(modal).click(function(e) {
      e.stopPropagation();
    });

    // 「.modal-overlay」あるいは「.modal-close」をクリック
    $('.modal-wrap_filter, #modal-close_filter, .done').off().click(function() {
      $("body, html").css("overflow", "auto");
      // モーダルコンテンツとオーバーレイをフェードアウト
      $(modal).fadeOut('slow');
      $('.MDL_window_wrap_filter').animate({
        'top': '-100%'
      }, );
      $('.modal-overlay_filter').fadeOut('slow', function() {
        // html、bodyの固定解除
        $('html, body').removeClass('lock');
        // オーバーレイを削除
        $('.modal-overlay_filter').remove();
        // モーダルコンテンツを囲む要素を削除
        $(modal).unwrap("<div class='modal-wrap_filter'></div>");

        //コンテンツを一度すべて非表示にし、
        $('.content-car li:nth-child(2)').css('display', 'none');

        //クリックされたタブと同じ順番のコンテンツを表示します。
        $('.content-car li:nth-child(1)').css('display', 'block');

        //一度タブについているクラスselectを消し、
        $('.tab li:nth-child(2)').removeClass('select');

        //クリックされたタブのみにクラスselectをつけます。
        $('.tab li:first-child').addClass('select');


      });
    });

    // // リサイズしたら表示位置を再取得
    // $(window).on('resize', function(){
    //     modalResize();
    // });
    //
    // // モーダルコンテンツの表示位置を設定する関数
    // function modalResize(){
    //     // ウィンドウの横幅、高さを取得
    //     var w = $(window).width();
    //     var h = $(window).height();
    //
    //     // モーダルコンテンツの横幅、高さを取得
    //     var mw = $(modal).outerWidth(true);
    //     var mh = $(modal).outerHeight(true);
    //
    //     // モーダルコンテンツの表示位置を設定
    //     if ((mh > h) && (mw > w)) {
    //         $(modal).css({'left': 0 + 'px','top': 0 + 'px'});
    //     } else if ((mh > h) && (mw < w)) {
    //         var x = (w - scrollsize - mw) / 2;
    //         $(modal).css({'left': x + 'px','top': 0 + 'px'});
    //     } else if ((mh < h) && (mw > w)) {
    //         var y = (h - scrollsize - mh) / 2;
    //         $(modal).css({'left': 0 + 'px','top': y + 'px'});
    //     } else {
    //         var x = (w - mw) / 2;
    //         var y = (h - mh) / 2;
    //         $(modal).css({'left': x + 'px','top': y + 'px'});
    //     }
    // }

  });


});
