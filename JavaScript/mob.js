$(() => {
    $('#contact_form').submit((e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Submit your response',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return fetch(`https://us-central1-mail-36181.cloudfunctions.net/sendMail/?name=${$('#enter-name').val()}&email=${$('#email').val()}&msg=${$('#msg').val()}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    type: 'success',
                    title: `Success`,
                    text: "Successfully Submitted"
                })
            }
        })
    });


    $("label").css('visibility', 'hidden');
    $(".menu").click(() => {
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
    $(window).resize(() => {
        let w = $(window).width();
        let h = $(window).height();

        if (!detectMob()) {
            window.location.replace("desk.html");
        }
    });
});

function changeUI(flag) {

    const displayNav = $('.displayNav');
    // if ($(window).height() < 2000) {
    //     $("#intro").css("font-size", "100vh");
    //     displayNav.css({
    //         "font-size": "6vh",
    //         "height": "100px",
    //         "line-height": "100px"
    //     });
    //     $("label .menu").css({
    //         "right": "-100px",
    //         "top": "-100px",
    //         "width": "200px",
    //         "height": "200px"
    //     });
    //     $("label .hamburger").css({
    //         "top": "135px",
    //         "left": "35px"
    //     });
    //     if (flag === 0) {
    //         $('html, body').animate({
    //             'scrollTop': $("#home").position().top - 120
    //         });
    //     }
    // } else {

    $("#intro").css("font-size", "5vh");
    displayNav.css({
        "font-size": "3vh",
        "height": "150px",
        "line-height": "150px"
    });
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
    // }
}

function changeOrientation() {
    if (orientation === 90) {
        $('#footer').css('margin-top', '50%');
        $('.home-row-content').removeClass('col-xs-12 col-sm-12')
            .addClass('col-xs-6 col-sm-6');
        $('.work-content').addClass('jumbotron');
        $('#contact .container').addClass('jumbotron');
        $('.skill-images').removeClass('col-xs-4 col-sm-4')
            .addClass('col-xs-3 col-sm-3');
        $('.skills-content').removeClass('container')
            .addClass('container-fluid');
        $('.copyright').css('font-size', '8vh');
        arrow = $('.arrow').detach();
        $('.input_field input').css('font-size', '5vh');
        $('.input_field textarea').css('font-size', '5vh');
    } else {
        $('#footer').css('margin-top', '0');
        $('.home-row-content').addClass('col-xs-12 col-sm-12')
            .removeClass('col-xs-6 col-sm-6');
        $('.work-content').removeClass('jumbotron');
        $('#contact .container').removeClass('jumbotron');
        $('.skill-images').addClass('col-xs-4 col-sm-4')
            .removeClass('col-xs-3 col-sm-3');
        $('.skills-content').addClass('container')
            .removeClass('container-fluid');
        $('.copyright').css('font-size', '3vh');
        $('.input_field input').css('font-size', '2vh');
        $('.input_field textarea').css('font-size', '2vh');
        if (arrow)
            $('#home .container').append(arrow)
    }
}

const detectMob = () => {
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
