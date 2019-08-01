$(() => {
  desk();
  changeTextAreaSize();

  $("#contact_form").validationEngine('attach',{ scroll: false });
  $(".lds-hourglass").css("top", "45%");
  // Input Lock
  $('textarea').blur(function() {
    $('#hire textarea').each(function() {
      $this = $(this);
      if (this.value != '') {
        $this.addClass('focused');
        $('textarea + label + span').css({
          'opacity': 1
        });
      } else {
        $this.removeClass('focused');
        $('textarea + label + span').css({
          'opacity': 0
        });
      }
    });
  });

  $('#hire .field:first-child input').blur(function() {
    $('#hire .field:first-child input').each(function() {
      $this = $(this);
      if (this.value != '') {
        $this.addClass('focused');
        $('.field:first-child input + label + span').css({
          'opacity': 1
        });
      } else {
        $this.removeClass('focused');
        $('.field:first-child input + label + span').css({
          'opacity': 0
        });
      }
    });
  });
  $('#msg').blur(() => {
    if ($('#msg').val() == '') {
      changeTextAreaSize()
    }
  });
  $(".proj").hover(function(){
      $(this).css("color","black");
    },
    function() {
      $(this).css("color","white");
    }
  );
  $('#hire .field:nth-child(2) input').blur(function() {
    $('#hire .field:nth-child(2) input').each(function() {
      $this = $(this);
      if (this.value != '') {
        $this.addClass('focused');
        $('.field:nth-child(2) input + label + span').css({
          'opacity': 1
        });
      } else {
        $this.removeClass('focused');
        $('.field:nth-child(2) input + label + span').css({
          'opacity': 0
        });
      }
    });
  });
  $('#msg').autoResize();

  $(window).resize( () =>{
    changeTextAreaSize();
    var w = $(window).width();
    var h = $(window).height();

    if(detectmob()){
        window.location.replace("mob.html");
    }
    // else if(screenCheck(w,h))
    // {
    //   // window.location.replace("mob.html");
    //   $("#myContainer").css("visibility","hidden");
    //   $("#screen").css("visibility","visible");
    //   $("#menu").css("visibility","hidden");
    // }
    // else{
    //   $("#myContainer").css("visibility","visible");
    //   $("#screen").css("visibility","hidden");
    //   $("#menu").css("visibility","visible");
    // }
});
  $(window).on('hashchange', function () {
    var hash = window.location.hash.substring(1);
    // if(hash.localeCompare("about")==0){
    //   $('.skillbar').each(function(){
    //     $(this).find('.skillbar-bar').animate({
    //       width:$(this).attr('data-percent')
    //     },2000);
    //   });
    // }
    // else {
    //   $('.skillbar').each(function() {
    //     $(this).find('.skillbar-bar').animate({
    //     width: 0
    //   }, 200);
    //   });
    // }
  });
  if (window.location.hash) {
    $(window).trigger('hashchange')
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

function desk() {
  $(".lds-hourglass").css("top", "45%");
  topFunction();
  var image = document.createElement('img');
  image.src = getBgUrl(document.getElementById('logos'));
  image.onload = function () {
    $.getScript('css/jquery.multiscroll.css', function(data, textStatus, jqxhr) {
      $.getScript('JavaScript/jquery.multiscroll.min.js', function(data, textStatus, jqxhr) {
        $.getScript('JavaScript/jquery.easings.min.js', function(data, textStatus, jqxhr) {
          topFunction();
          $("#myContainer").css("visibility", "visible");
          $(".lds-hourglass").css("top", "-45%");
          $("#overlay").remove();
          $("#target").css("z-index", 6);
          $("#target").css("opacity", 1);
          topFunction();
          const element = document.querySelector(".js-tilt");
          VanillaTilt.init(element);
          $('#myContainer').multiscroll({
            sectionsColor: ['#291D35', '#584B4F', '#664b00', '#293d3d'],
            anchors: ['home', 'skills', 'works', 'contact'],
            menu: '#menu',
            easing: 'easeOutBack'
          });
        });
      });
    });
  };
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  $("html").css("overflow", "hidden");
}

function screenCheck(w,h){
  var ratio = w / h;
  return ( Math.abs( ratio - 4/3 ) < Math.abs( ratio - 16/9 )) ? true : false || ( w < 880 || h < 470 )
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

function changeTextAreaSize() {
  if ($(window).height() > 900)
    $('#msg').css('height', $(window).height() / 15);
  else if ($(window).height() > 800)
    $('#msg').css('height', $(window).height() / 14);
  else if ($(window).height() > 700)
    $('#msg').css('height', $(window).height() / 13);
  else if ($(window).height() > 600)
    $('#msg').css('height', $(window).height() / 12);
  else if ($(window).height() > 500)
    $('#msg').css('height', $(window).height() / 11);
}
