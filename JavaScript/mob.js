$(() => {
    $("label").css('visibility', 'hidden');
  let flag = 0;
  $(".menu").click(function () {
    let rad = parseFloat($(this).css("border-radius"));
    if (rad === 50) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  });

  $("label ul").click(() => {
    $("body").css("overflow", "visible");
    $(".dis").prop("checked", false);
  });
  $(window).on("orientationchange", function (event) {
    changeUI(flag);
    flag = 1;
  });

    const real = parseFloat($("#intro").css("font-size"));

  let dummy = 0;
  let lastScroll = 0;

    $(document).scroll(() => {
        let scroll = $(window).scrollTop();
        let objectPosition = ($(window).height()) / 20;
        // let homePosition = $("#home").position().top;
    if (scroll > objectPosition) {
      $('#name').addClass('displayNav');
      $("#bar").css("visibility", "visible");
      changeUI(flag);
      flag = 1;
    } else {
      let size = 0;
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

const changeUI = (flag) => {
  const displayNav = $('.displayNav');
  if ($(window).height() < 2000) {
      $("#intro").css("font-size", "10vh");
    displayNav.css({
      "font-size": "6vh",
      "height": "100px",
      "line-height": "100px"
    });
    $('.filler').css('height', displayNav.css('height'));
    $("label .menu").css({
      "right": "-100px",
      "top": "-100px",
      "width": "200px",
      "height": "200px"
    });
    $("label .hamburger").css({
      "top": "135px",
      "left": "35px"
    });
    if (flag === 0) {
      $('html, body').animate({
        'scrollTop': $("#home").position().top - 120
      });
    }
  } else {
      $("#intro").css("font-size", "5vh");
    displayNav.css({
      "font-size": "3vh",
      "height": "150px",
      "line-height": "150px"
    });
    $('.filler').css('height', displayNav.css('height'));
    $("label .menu").css({
      "right": "-100px",
      "top": "-100px",
      "width": "250px",
      "height": "250px"
    });
    $("label .hamburger").css({
      "top": "160px",
      "left": "70px"
    });
    if (flag === 0) {
      $('html, body').animate({
        'scrollTop': $("#home").position().top - 170
      });
    }
  }
};

