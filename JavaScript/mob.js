// function mob() {
//   $("#myContainer").css("visibility", "hidden");
//   $("#mouse").remove();
//   var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
//   var isFirefox = typeof InstallTrigger !== 'undefined';
//   var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) {
//     return p.toString() === "[object SafariRemoteNotification]";
//   })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
//   var isIE = /*@cc_on!@*/ false || !!document.documentMode;
//   var edge = navigator.userAgent.match(/Edg/i);
//   var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
//   var isBlink = (isChrome || isOpera) && !!window.CSS;
//   var sams = navigator.userAgent.match(/SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i);
//   var isSamsung;
//   var isEdge;
//   if (sams != null)
//     isSamsung = true;
//   else
//     isSamsung = false;
//
//   if (edge != null)
//     isEdge = true;
//   else
//     isEdge = false;
//
//
//   if (isOpera || isFirefox || isSafari || isBlink || isSamsung || isEdge) {
//     $('#img1').css("-webkit-animation-name", "img1m");
//     $('#img1').css("animation-name", "img1m");
//     $('#img1').css("background-size", "210%");
//     $('#img1').css("left", "-100%");
//     $('#img1').css("width", "210%");
//     $('#img1').css("top", "-10%");
//     $('#img1').attr("data-0", "background-size:195%;z-index:3;opacity:1;");
//     $('#img1').attr("data-50000", "background-size:195%;z-index:1;opacity:0.5;");
//     $('#img1').attr("data-50100", "opacity:0;");
//
//     $('#img2').css("-webkit-animation-name", "img2m");
//     $('#img2').css("animation-name", "img2m");
//     $('#img2').css("background-size", "40%");
//     $('#img2').css("top", "70%");
//     $('#img2').css("width", "95%");
//     $('#img2').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
//       $(this).css("-webkit-animation-name", "img21m");
//       $(this).css("-webkit-animation-iteration-count", "infinite");
//       $(this).css("animation-name", "img21m");
//       $(this).css("animation-iteration-count", "infinite");
//     });
//     $('#img2').attr("data-0", "background-size:40%;z-index:3;opacity:1;");
//     $('#img2').attr("data-50000", "background-size:350%;z-index:1;opacity:0.5;");
//     $('#img2').attr("data-50100", "opacity:0;");
//
//     $('#img3').css("-webkit-animation-name", "img3m");
//     $('#img3').css("animation-name", "img3m");
//     $('#img3').css("background-size", "45%");
//     $('#img3').css("left", "3%");
//     $('#img3').css("top", "25%");
//     $('#img3').css("width", "160%");
//     $('#img3').attr("data-0", "background-size:45%;z-index:3;opacity:1;");
//     $('#img3').attr("data-10000", "background-size:30%;z-index:1;opacity:0.5;");
//     $('#img3').attr("data-50010", "opacity:0;");
//   } else if (navigator.userAgent.indexOf("Chrome") != -1) {
//     change();
//   }
//
//   var s = skrollr.init({
//     render: function(data) {
//       if ($("#img1").css("opacity") < 0.1) {
//         $('#img1').css("z-index", "1");
//         $('#img2').css("z-index", "1");
//         $('#img3').css("z-index", "1");
//         change();
//       }
//     }
//   });
// }

$(() => {
  var flag = 0;

  $(".menu").click(function () {
    var rad = parseFloat($(this).css("border-radius"));
    if (rad == 50) {
      $("body").css("overflow", "hidden");
    } else {
    }
    $("body").css("overflow", "visible");
  });
  $("label ul").click(function () {
    $("body").css("overflow", "visible");
    $(".dis").prop("checked", false);
  });
  $(window).on("orientationchange", function (event) {
    if ($(window).height() < 2000) {
      $("#section1").css("font-size", "10vh");
      $('.displayNav').css("font-size", "6vh");
      $('.displayNav').css("height", "100px");
      $('.displayNav').css("line-height", "100px");
      $("label .menu").css("right", "-100px");
      $("label .menu").css("top", "-100px");
      $("label .menu").css("width", "200px");
      $("label .menu").css("height", "200px");
      $("label .hamburger").css("top", "135px");
      $("label .hamburger").css("left", "35px");
      if (flag == 0) {
        $('html, body').animate({
          'scrollTop': $("#section2").position().top - 120
        });
      }
    } else {
      $("#section1").css("font-size", "5vh");
      $('.displayNav').css("font-size", "3vh");
      $('.displayNav').css("height", "150px");
      $('.displayNav').css("line-height", "200px");
      $("label .menu").css("right", "-100px");
      $("label .menu").css("top", "-100px");
      $("label .menu").css("width", "250px");
      $("label .menu").css("height", "250px");
      $("label .hamburger").css("top", "160px");
      $("label .hamburger").css("left", "70px");
      if (flag == 0) {
        $('html, body').animate({
          'scrollTop': $("#section2").position().top - 170
        });
      }
    }

    flag = 1;
  });

  var real = parseFloat($("#section1").css("font-size"));
  var dummy = 0;
  var lastScroll = 0;
  $(document).scroll(function () {

    var scroll = $(window).scrollTop();
    var objectPosition = ($(window).height()) / 10;

    if (scroll > objectPosition) {
      $('#name').addClass('displayNav');
      $("#bar").css("visibility", "visible");
      if ($(window).height() < 2000) {
        $("#section1").css("font-size", "10vh");
        $('.displayNav').css("height", "100px");
        $('.displayNav').css("font-size", "6vh");
        $('.displayNav').css("line-height", "100px");
        $("label .menu").css("right", "-100px");
        $("label .menu").css("top", "-100px");
        $("label .menu").css("width", "200px");
        $("label .menu").css("height", "200px");
        $("label .hamburger").css("top", "135px");
        $("label .hamburger").css("left", "35px");
        if (flag == 0) {
          $('html, body').animate({
            'scrollTop': $("#section2").position().top - 120
          });
        }
      } else {
        $("#section1").css("font-size", "5vh");
        $('.displayNav').css("font-size", "3vh");
        $('.displayNav').css("height", "150px");
        $('.displayNav').css("line-height", "150px");
        $("label .menu").css("right", "-100px");
        $("label .menu").css("top", "-100px");
        $("label .menu").css("width", "250px");
        $("label .menu").css("height", "250px");
        $("label .hamburger").css("top", "160px");
        $("label .hamburger").css("left", "70px");
        if (flag == 0) {
          $('html, body').animate({
            'scrollTop': $("#section2").position().top - 170
          });
        }
      }
      flag = 1;
    } else {
      var size = 0;
      if (lastScroll > scroll) {
        size = dummy + (objectPosition / 20 - (scroll / 20));
      } else {
        size = real - (scroll / 20);
        dummy = size;
      }
      $("#name").css("font-size", size);
      flag = 0;
      lastScroll = scroll;
      $("#bar").css("visibility", "hidden");
      $('#name').removeClass('displayNav');
    }
  });
});
