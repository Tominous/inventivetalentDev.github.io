(function () {
    document.getElementById("separator_line").addEventListener("animationend", function () {
        $("main").removeClass("hidden");

        setTimeout(function () {
            $(".upper-content").addClass("visible");
            $(".avatar-img").addClass("visible");
        }, 100);
        $(".slideshow-content")[0].addEventListener("transitionend", function (event) {
            $(".slideshow").slick('slickGoTo', 0, true);
        }, false);
        setTimeout(function () {
            $(".slideshow-content").addClass("visible");
        }, 600);
        setTimeout(function () {
            $(".lower-content").addClass("visible");
        }, 1100);
        setTimeout(function () {
            $(".contact-content").addClass("visible");
        }, 1600);
        setTimeout(function () {
            $(".embed-content").addClass("visible");
            $(".embed").fadeIn();
        }, 2100);
        setTimeout(function () {
            $("footer").addClass("visible");
        }, 2600);
    }, false);
})();