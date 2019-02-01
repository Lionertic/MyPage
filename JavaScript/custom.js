function desk(){
  $("#myContainer").css("visibility","hidden");
  $('#img2').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
    $(this).css("-webkit-animation-name","img21");
    $(this).css("-webkit-animation-iteration-count","infinite");
    $(this).css("animation-name","img21");
    $(this).css("animation-iteration-count","infinite");
  });
  var s = skrollr.init({
    render: function(data) {
        if ($("#overlay").css("opacity") == 0) {
          change();
        }
    }
  });
}
function loading(){
  topFunction();
  $.getScript('css/jquery.multiscroll.css', function(data, textStatus, jqxhr) {
    $.getScript('JavaScript/jquery.multiscroll.min.js', function(data, textStatus, jqxhr) {
      $.getScript('JavaScript/jquery.easings.min.js', function(data, textStatus, jqxhr) {
        $.getScript('JavaScript/scramble.js', function(data, textStatus, jqxhr) {
          topFunction();
        $("#myContainer").css("visibility","visible");
        $(".lds-hourglass").css("top", "-45%");
        $("#overlay").remove();
        $("#target").css("z-index", 6);
        $("#target").css("opacity", 1);
        topFunction();
        $('#myContainer').multiscroll({
          sectionsColor: ['#291D35', '#584B4F', '#664b00','#293d3d'],
          anchors: ['home', 'about', 'works', 'contact'],
          menu: '#menu',
          easing: 'easeOutBack'
        });
      });
    });
  });
});
}
function change(){
  $("skr").remove();
  $(".lds-hourglass").css("top", "45%");
  $("#img3").css("opacity",0);
  $("#img1").remove();
  $("#img2").remove();
  $("#img3").remove();
  // $('html').css("scroll-behavior","auto");
 // setTimeout(loading,1000);
 loading();
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  $("html").css("overflow","hidden");
}

function mob(){
  $("#myContainer").css("visibility","hidden");
  $("#mouse").remove();
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  var edge = navigator.userAgent.match(/Edg/i);
  var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  var isBlink = (isChrome || isOpera) && !!window.CSS;
  var sams =navigator.userAgent.match(/SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i);
  var isSamsung;
  var isEdge;
  if(sams != null)
    isSamsung = true;
  else
    isSamsung = false;

  if(edge != null)
    isEdge = true;
  else
    isEdge = false;


  if(isOpera || isFirefox || isSafari ||isBlink|| isSamsung || isEdge){
    $('#img1').css("-webkit-animation-name","img1m");
    $('#img1').css("animation-name","img1m");
    $('#img1').css("background-size","210%");
    $('#img1').css("left","-100%");
    $('#img1').css("width","210%");
    $('#img1').css("top","-10%");
    $('#img1').attr("data-0","background-size:195%;z-index:3;opacity:1;");
    $('#img1').attr("data-50000","background-size:195%;z-index:1;opacity:0.5;");
    $('#img1').attr("data-50100","opacity:0;");

    $('#img2').css("-webkit-animation-name","img2m");
    $('#img2').css("animation-name","img2m");
    $('#img2').css("background-size","40%");
    $('#img2').css("top","70%");
    $('#img2').css("width","95%");
    $('#img2').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
      $(this).css("-webkit-animation-name","img21m");
      $(this).css("-webkit-animation-iteration-count","infinite");
      $(this).css("animation-name","img21m");
      $(this).css("animation-iteration-count","infinite");
    });
    $('#img2').attr("data-0","background-size:40%;z-index:3;opacity:1;");
    $('#img2').attr("data-50000","background-size:350%;z-index:1;opacity:0.5;");
    $('#img2').attr("data-50100","opacity:0;");

    $('#img3').css("-webkit-animation-name","img3m");
    $('#img3').css("animation-name","img3m");
    $('#img3').css("background-size","45%");
    $('#img3').css("left","3%");
    $('#img3').css("top","25%");
    $('#img3').css("width","160%");
    $('#img3').attr("data-0","background-size:45%;z-index:3;opacity:1;");
    $('#img3').attr("data-10000","background-size:30%;z-index:1;opacity:0.5;");
    $('#img3').attr("data-50010","opacity:0;");
  }
  else if(navigator.userAgent.indexOf("Chrome") != -1){
    change();
  }

  var s = skrollr.init({
    render: function(data) {
      if ($("#img1").css("opacity") < 0.1) {
        $('#img1').css("z-index","1");
        $('#img2').css("z-index","1");
        $('#img3').css("z-index","1");
        change();
      }
    }
  });
}
