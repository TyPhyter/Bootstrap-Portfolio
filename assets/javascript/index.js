$(document).ready(function() {
    var $navbar = $(".navbar");
    var $navBrand = $(".navbar-brand");
    var $sidebar = $("#sidebar");
    var $sidebarIcon = $("#sidebar-icon");
    var sidebarShownOnce = false;
    var sticky = $navbar.offset().top + 20;
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
        console.log(randomInt);
        if ($element) {
            $element.toggleClass("glitch-active");
            clearInterval(glitchTimer);
            glitchTimer = setTimeout(function () {
                console.log("new interval");
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

    $(document).ready(function () {
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
                if (page === "index.html") {
                    $navbar.hide();
                }
                $navbar.removeClass("scrolled sticky");
                if (Math.round($(window).scrollTop()) < sticky) {
                    $sidebar.removeClass("showSidebar");
                    $sidebarIcon.removeClass("rotateIcon");
                }
            }
        });

        $sidebarIcon.on("click", function (evt) {
            $sidebarIcon.toggleClass("rotateIcon");
            $sidebar.toggleClass("showSidebar");
        });

        //TweenMax.to("#main-section", 0, { rotationY: -90, transformOrigin: "50% 50% -400px" });
        //TweenMax.to("#last-line", 0, { rotationY: -90, transformOrigin: "50% 50% -400px" });
        TweenMax.to("#my-face", 0, { rotationY: -90 });
        TweenMax.to("#about-me", 0, { rotationY: 90, transformOrigin: "50% 50% -400px" });
        var nameTimeLine = new TimelineMax();
        nameTimeLine.to("#SVGnameText", 2, { attr: { x: 10 }, ease: SteppedEase.config(12) });
        nameTimeLine.to("#SVGnameText", 1, { attr: { y: 75 }, ease: Power2.easeOut });
        nameTimeLine.to("#SVGtagLine1", 2, { attr: { x: 10 }, ease: SteppedEase.config(24) });
        nameTimeLine.to("#SVGtagLine1", .75, { attr: { y: 60 }, delay: 0.1, ease: Power2.easeOut });
        nameTimeLine.to(window, 1, { scrollTo: { y: sticky }, delay: 2, ease: Power2.easeInOut });
        nameTimeLine.to("#my-face", 0, { rotationY: 0 });
        nameTimeLine.to("#about-me", 0, { rotationY: -0, transformOrigin: "50% 50% -400px" });
        //nameTimeLine.to("#main-section", 1, { rotationY: 0, transformOrigin: "50% 50% -400px", ease: Power2.easeInOut });
        //nameTimeLine.to("#last-line", 1, { rotationY: 0, transformOrigin: "50% 50% -400px", ease: Power2.easeInOut });

    });

    $(".flip3d-card").flip({
        "trigger": "click",
        "front": ".flip-front",
        "back": ".flip-back"
    });

});