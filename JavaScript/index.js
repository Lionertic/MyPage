$(document).ready(function(){
  $('#img2').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
    $(this).css("-webkit-animation-name", "img21d");
    $(this).css("-webkit-animation-iteration-count", "infinite");
    $(this).css("animation-name", "img21d");
    $(this).css("animation-iteration-count", "infinite");
  });
  var w = $(window).width();
  var h =$(window).height();
  $(window).resize(function(){
    var w = $(window).width();
    var h =$(window).height();
    if(w<880 || h < 470){
      console.log("jjj");
      $("#img1").css("visibility","hidden");
      $("#img2").css("visibility","hidden");
      $("#img3").css("visibility","hidden");
      $("#screen").css("visibility","visible");
    }else{
      console.log("ddd");
      $("#screen").css("visibility","hidden");
      $("#img1").css("visibility","visible");
      $("#img2").css("visibility","visible");
      $("#img3").css("visibility","visible");
    }
});
if (!detectmob()) {
  if(w<880 || h < 470)
  {
    $("#myContainer").css("visibility","hidden");
    $("#screen").css("visibility","visible");
    $("#menu").css("visibility","hidden");
  }
  else{
    $("#myContainer").css("visibility","visible");
    $("#screen").css("visibility","hidden");
    $("#menu").css("visibility","visible");
    var image = document.createElement('img');
    var i=0;
    for(i=1;i<=3;i++){
      var name="img";
      image.src = getBgUrl(document.getElementById(name+i));
      image.onload = function () {
        if(i==3){
            setTimeout(showPage,500);
        }
      }
    }
  }

    var s = skrollr.init({
      render: function(data) {
        if ($("#overlay").css("opacity") > 0.85) {
          window.location.replace("desk.html#home");
        }
      }
    });
} else {
    window.location.replace("mob.html");
}
});
function detectmob() {
  if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i))
    return true;
  else
    return false;
}


function getBgUrl(el) {
var bg = "";
if (el.currentStyle) { // IE
  bg = el.currentStyle.backgroundImage;
} else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
  bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
} else { // try and get inline style
  bg = el.style.backgroundImage;
}
return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}
function showPage() {
  document.body.classList.remove('js-loading');
}
