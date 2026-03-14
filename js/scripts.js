/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (e) {
        if (
            location.pathname.replace(/^\//, "") !==
                this.pathname.replace(/^\//, "") ||
            location.hostname !== this.hostname
        ) {
            return;
        }

        var hash = this.hash.slice(1);
        var target = $("#" + hash).length ? $("#" + hash) : $("[name='" + hash + "']");
        if (!target.length) return;

        $("html, body").animate(
            {
                scrollTop: target.offset().top,
            },
            1000,
            "easeInOutExpo"
        );
        e.preventDefault();
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict
