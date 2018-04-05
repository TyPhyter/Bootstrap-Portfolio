var $navbar = $(".navbar");
var $navBrand = $(".navbar-brand");
var $sidebar = $("#sidebar");
var sticky = $navbar.offset().top + 20;
var glitchTimer;

var path = window.location.pathname;
var page = path.split("/").pop();
if(page === "index.html"){
    $navbar.hide();
}

function autoGlitch($element) {

    var randomInt;
    //check for LACK of active class, we're toggling afterward
    if(!$element.hasClass("glitch-active")){
        randomInt = Math.random()*1500;
    } else {
        randomInt = Math.random()*5000;
    }
    console.log(randomInt);
    if($element){
        $element.toggleClass("glitch-active");
        clearInterval(glitchTimer);
        glitchTimer = setTimeout(function() {
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
glitchTimer = setInterval(function(){
    autoGlitch($navBrand);
}, 3000);

$(document).ready(function () {
    $(window).on('scroll', function () {
        //change styling on scroll offset
        if (Math.round($(window).scrollTop()) >= sticky) {
            $navbar.show();
            $navbar.addClass("scrolled sticky");
        } else {
            if(page === "index.html"){
                $navbar.hide();
            }
            $navbar.removeClass("scrolled sticky");
        }
    });
    var nameTimeLine = new TimelineMax();
    nameTimeLine.to("#SVGnameText", 3, {attr:{x:0}, ease:SteppedEase.config(12)});
    nameTimeLine.to("#SVGnameText", 2, {attr:{y:75}, ease:Power1.easeOut});

});

$(".flip3d-card").flip({
    "trigger": "click",
    "front": ".flip-front",
    "back": ".flip-back"
});

// $(document).on("click", ".flip3d-card", function(){
//     console.log("click");
//     console.log($(this));
//     $(this).flip(toggle);
// });
