$(document).ready(function () {
  lazyLoad();
  if ($(window).width() >= 991) {
    $(".hero-text").addClass("loaded");
    sal({
      once: true,
    });
  } else {
    sal({
      disabled: true,
    });
  }

  $(".menu-btn").on("click", function (e) {
    $(".navbar").fadeIn(300);
    $(".overlay").fadeIn(300);
    $(".header-nav").addClass("active");
    $("body").addClass("overflow");
  });
  $(".overlay,.close-btn").on("click", function (e) {
    $(".navbar").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".header-nav").removeClass("active");
    $("body").removeClass("overflow");
  });

  if ($(window).width() <= 767) {
    $(".footer-title").click(function () {
      $(".footer-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-title").not(this).siblings().slideUp(500);
    });
  }
});
