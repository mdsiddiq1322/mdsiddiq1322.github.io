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
    var mobileBottomNav = document.getElementById("mobileBottomNav");
    var mobileNavLinks = document.querySelectorAll(".mobile-bottom-nav__link");
    var mobileNavGlass = document.querySelector(".mobile-bottom-nav__glass");
    var mobileSections = Array.prototype.slice.call(document.querySelectorAll("section.resume-section"));

    function updateMobileNavGlass(activeLink) {
        if (!mobileBottomNav || !mobileNavGlass || !activeLink) return;

        var navRect = mobileBottomNav.getBoundingClientRect();
        var linkRect = activeLink.getBoundingClientRect();
        var offsetX = linkRect.left - navRect.left;

        mobileNavGlass.style.width = linkRect.width + "px";
        mobileNavGlass.style.transform = "translateX(" + offsetX + "px)";
    }

    function setActiveMobileNav(sectionId) {
        mobileNavLinks.forEach(function (link) {
            var isMatch = link.getAttribute("href") === "#" + sectionId;
            link.classList.toggle("is-active", isMatch);
            if (isMatch) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });

        var activeLink = document.querySelector('.mobile-bottom-nav__link.is-active');
        updateMobileNavGlass(activeLink);
    }

    function getCurrentMobileSection() {
        var scrollPosition = window.scrollY + window.innerHeight * 0.35;
        var currentSection = mobileSections[0];

        mobileSections.forEach(function (section) {
            if (section.offsetTop <= scrollPosition) {
                currentSection = section;
            }
        });

        return currentSection ? currentSection.id : null;
    }

    if (mobileNavLinks.length) {
        setActiveMobileNav(getCurrentMobileSection() || "about");
        mobileNavLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                var targetId = (link.getAttribute("href") || "").replace("#", "");
                if (targetId) {
                    setActiveMobileNav(targetId);
                }
            });
        });
        window.addEventListener("scroll", function () {
            var currentSectionId = getCurrentMobileSection();
            if (currentSectionId) {
                setActiveMobileNav(currentSectionId);
            }
        });
        window.addEventListener("resize", function () {
            var activeLink = document.querySelector('.mobile-bottom-nav__link.is-active');
            updateMobileNavGlass(activeLink);
        });
    }

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
