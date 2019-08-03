$(() => {

  const w = $(window).width();
  const h = $(window).height();

  $("#img2").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
    $(this).css("-webkit-animation-name", "img21d");
    $(this).css("-webkit-animation-iteration-count", "infinite");
    $(this).css("animation-name", "img21d");
    $(this).css("animation-iteration-count", "infinite");
  });


  $(window).resize(() => {
    let w = $(window).width();
    let h = $(window).height();
    if ((w < h) || (w < 880 || h < 470)) {
      changeVisibility("hidden", "visible", "hidden")
    } else {
      changeVisibility("visible", "hidden", "auto");
    }
  });
  if (!detectmob()) {
    changeVisibility("visible", "hidden", "auto");
    const image = document.createElement('img');

    for (let i = 1; i <= 3; i++) {
      const name = "img";
      image.src = getBgUrl(document.getElementById(name + i));
      image.onload = function () {
        if (i === 3) {
          setTimeout(showPage, 500);
        }
      }
    }
    const s = skrollr.init({
      render: function (data) {
        let opacity = $("#overlay").css("opacity");
        if ((opacity > 0.8) || (opacity === 0)) {
          window.location.replace("desk.html#home");
        }
      }
    });
  } else {
    window.location.replace("mob.html");
  }
});

const detectmob = () => {
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
};

const getBgUrl = (el) => {
  let bg = "";
  if (el.currentStyle) { // IE
    bg = el.currentStyle.backgroundImage;
  } else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
    bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
  } else { // try and get inline style
    bg = el.style.backgroundImage;
  }
  return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
};

const changeVisibility = (imgVisibility, screenVisibility, bodyOverflow) => {
  $('#screen').css("visibility", screenVisibility);
  $("#img1").css("visibility", imgVisibility);
  $("#img2").css("visibility", imgVisibility);
  $("#img3").css("visibility", imgVisibility);
  $("body").css("overflow", bodyOverflow);
};

const showPage = () => {
  document.body.classList.remove('js-loading');
};
