$(document).ready(function () {
    var $navbar = $(".navbar");
    var $navBrand = $(".navbar-brand");
    var $sidebar = $("#sidebar");
    var $sidebarIcon = $("#sidebar-icon");
    const $about = $('#main-section');
    const $navBarBtn = $('button.navbar-toggle');
    const $messageSent = $('#messageSent');
    $messageSent.hide();
    const $messageError = $('#messageError');
    $messageError.hide();
    var sidebarShownOnce = false;
    var sticky = $navbar.offset().top - 5;
    var glitchTimer;

    var path = window.location.pathname;
    var page = path.split("/").pop();
    $navbar.hide();

    function autoGlitch($element) {

        var randomInt;
        //check for LACK of active class, we're toggling afterward
        if (!$element.hasClass("glitch-active")) {
            randomInt = Math.random() * 1500;
        } else {
            randomInt = Math.random() * 5000;
        }
        // console.log(randomInt);
        if ($element) {
            $element.toggleClass("glitch-active");
            clearInterval(glitchTimer);
            glitchTimer = setTimeout(function () {
                // console.log("new interval");
                autoGlitch($element);
            }, randomInt);
        }
    }

    // $navbar.hide();
    // var $profileCard = $(".profile-card");
    // $profileCard.on("click", function(evt){
    //     $(this).flip("toggle");
    //     console.log("click");
    // })
    glitchTimer = setInterval(function () {
        autoGlitch($navBrand);
    }, 3000);


    $(window).on('scroll', function () {
        //change styling on scroll offset
        if (Math.round($(window).scrollTop()) >= sticky) {
            $navbar.show();
            $navbar.addClass("scrolled sticky");
            if (!sidebarShownOnce) {
                $sidebar.addClass("showSidebar");
                $sidebarIcon.addClass("rotateIcon");
                sidebarShownOnce = true;
            }
        } else {
            
            $navbar.hide();
            
            $navbar.removeClass("scrolled sticky");
            if (Math.round($(window).scrollTop()) < sticky) {
                $sidebar.removeClass("showSidebar");
                $sidebarIcon.removeClass("rotateIcon");
            }
        }
    });

    $('#about-button').on('click', function (evt) {
        evt.preventDefault();
        TweenMax.to(window, 1, { scrollTo: { y: $about.offset().top }, ease: Power2.easeInOut });
        $navBarBtn.click();
    });

    $('#skills-button').on('click', function (evt) {
        evt.preventDefault();
        $skills = $('#skills');
        TweenMax.to(window, 1, { scrollTo: { y: $skills.offset().top }, ease: Power2.easeInOut });
        $navBarBtn.click();
    });

    $('#portfolio-button').on('click', function (evt) {
        evt.preventDefault();
        $work = $('#work');
        TweenMax.to(window, 1, { scrollTo: { y: $work.offset().top }, ease: Power2.easeInOut });
        $navBarBtn.click();
    });

    $('#contact-button').on('click', function (evt) {
        evt.preventDefault();
        $contact = $('#contact');
        TweenMax.to(window, 1, { scrollTo: { y: $contact.offset().top }, ease: Power2.easeInOut });
        $navBarBtn.click();
    });

    $('#send-email-btn').on('click', function (evt) {
        // evt.preventDefault();
        // let recipient = "tyler@typhyter.com";
        // let subject = $('input[name="name"]').val().trim() + " " + $('input[name="mail"]').val().trim();
        // let body = $('textarea[name="comment"]').val().trim();
        // $.post('https://frozen-eyrie-20216.herokuapp.com/email', {
        //     recipient,
        //     subject,
        //     body
        // }, function (err, response) {
        //     if (err) {
        //         $messageError.show();
        //         console.log(err);
        //         return;
        //     }
        //     $messageSent.show();
        //     console.log(response);
        // });
    });

    $sidebarIcon.on("click", function (evt) {
        $sidebarIcon.toggleClass("rotateIcon");
        $sidebar.toggleClass("showSidebar");
    });

    //TweenMax.to("#main-section", 0, { rotationY: -90, transformOrigin: "50% 50% -400px" });
    //TweenMax.to("#last-line", 0, { rotationY: -90, transformOrigin: "50% 50% -400px" });
    //TweenMax.to("#my-face", 0, { rotationY: -90 });
    //TweenMax.to("#about-me", 0, { rotationY: 90, transformOrigin: "50% 50% -400px" });
    var nameTimeLine = new TimelineMax();
    nameTimeLine.to("#SVGnameText", 2, { attr: { x: 10 }, ease: SteppedEase.config(12) });
    nameTimeLine.to("#SVGnameText", 1, { attr: { y: 75 }, ease: Power2.easeOut });
    nameTimeLine.to("#SVGtagLine1", 2, { attr: { x: 10 }, ease: SteppedEase.config(24) });
    nameTimeLine.to("#SVGtagLine1", .75, { attr: { y: 60 }, delay: 0.1, ease: Power2.easeOut });
    setTimeout(() => {
        if ($(window).scrollTop() < 250) {
            nameTimeLine.to(window, 1, { scrollTo: { y: $about.offset().top }, delay: 0.75, ease: Power2.easeInOut });
        }
    }, 5000);

    // nameTimeLine.to("#my-face", 0, { rotationY: 0 });
    // nameTimeLine.to("#about-me", 0, { rotationY: -0, transformOrigin: "50% 50% -400px" });
    //nameTimeLine.to("#main-section", 1, { rotationY: 0, transformOrigin: "50% 50% -400px", ease: Power2.easeInOut });
    //nameTimeLine.to("#last-line", 1, { rotationY: 0, transformOrigin: "50% 50% -400px", ease: Power2.easeInOut });



    $(".flip3d-card").flip({
        "trigger": "click",
        "front": ".flip-front",
        "back": ".flip-back"
    });

    $('.nav-item.disabled').on('click', function (evt) {
        evt.preventDefault();
    });

});