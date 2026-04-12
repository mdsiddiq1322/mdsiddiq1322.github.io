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

    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var revealTargets = document.querySelectorAll(".scroll-reveal-section, .scroll-reveal-item");

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
        revealTargets.forEach(function (target) {
            target.classList.add("scroll-reveal-visible");
        });
        return;
    }

    var revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("scroll-reveal-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -8% 0px",
        }
    );

    revealTargets.forEach(function (target) {
        revealObserver.observe(target);
    });
})(jQuery); // End of use strict
