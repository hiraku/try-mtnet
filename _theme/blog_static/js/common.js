jQuery(function($) {
  var lastIsFixed = undefined,
    $document = $(document),
    $header = $(".header");

  $(window).on("resize", function() {
    var headerHeight = $header.outerHeight();

    // メニューの高さ分だけ下に下げる
    $(".slide, .UL-header").css("padding-top", headerHeight);

    //ヘッダー固定
    $(window)
      .off("scroll.mt-theme-character")
      .on("scroll.mt-theme-character", function() {
        var scroll = $document.scrollTop(),
          isFixed = scroll > 40;
        if (lastIsFixed === isFixed) {
          return;
        }
        lastIsFixed = isFixed;

        if (isFixed) {
          $header.addClass("fixed")
          if (headerHeight < 85) {
            $header.find("img").addClass("fixed");
          }
        }
        else {
          $header.removeClass("fixed")
          $header.find("img").removeClass("fixed");
        }
      });
  }).triggerHandler("resize");

  // スクロール
  $("a[href^=#], .btn-top").on("click", function() {
    var speed    = 500; //移動完了までの時間(ミリ秒)を指定
    var href     = $(this).attr("href");
    var $target  = $($.find(href == "#" || href == "" ? "html" : href));
    var position = $target.offset().top;

    $("html,body").animate({scrollTop:position - 140}, speed, "swing");

    return false;
  });

  //スマホ用
  $("#navToggle").on("click", function() {
    $header.toggleClass("openNav");
  });
});
