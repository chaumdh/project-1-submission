/**
 * Splashes Aquatics - Main JavaScript
 * Features: sticky nav, sign-in modal, jQuery accordion, jQuery Ajax testimonials
 */

(function ($) {
    "use strict";

    /* -------------------------------------------
       1. Sticky Navbar - add shadow on scroll
    ------------------------------------------- */

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 40) {
            $(".navbar-splash").addClass("scrolled");
        } else {
            $(".navbar-splash").removeClass("scrolled");
        }
    });


    /* -------------------------------------------
       2. Register / Sign In Modal
    ------------------------------------------- */

    $(document).on("click", "[data-open-signin]", function (e) {
        e.preventDefault();
        $("#signInModal").modal("show");
    });


    /* Switch between Sign In and Sign Up panels */

    $("#btnShowSignUp").on("click", function () {
        $("#signInPanel").hide();
        $("#signUpPanel").fadeIn(200);
    });

    $("#btnShowSignIn").on("click", function () {
        $("#signUpPanel").hide();
        $("#signInPanel").fadeIn(200);
    });


    /* Enable Sign In button when fields are filled
       (style-guide inactive -> active) */

    function updateSignInButtonState() {

        var email = $("#signInEmail").val().trim();
        var password = $("#signInPassword").val().trim();
        var $btn = $("#signInForm button[type='submit']");

        if (email && password) {
            $btn.addClass("is-ready");
        } else {
            $btn.removeClass("is-ready");
        }
    }

    $("#signInEmail, #signInPassword").on(
        "input",
        updateSignInButtonState
    );


    /* Sign In form submit */

    $("#signInForm").on("submit", function (e) {

        e.preventDefault();

        var email = $("#signInEmail").val().trim();
        var password = $("#signInPassword").val().trim();

        if (!email || !password) {
            alert("Please fill in all required fields.");
            return;
        }

        /* Demo feedback - replace with real auth in production */

        alert("Welcome back! You are signed in as " + email);

        $("#signInModal").modal("hide");

        this.reset();
    });


    /* Sign Up form submit */

    $("#signUpForm").on("submit", function (e) {

        e.preventDefault();

        var name = $("#signUpName").val().trim();
        var email = $("#signUpEmail").val().trim();
        var password = $("#signUpPassword").val().trim();

        if (!name || !email || !password) {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Account created for " + name + "! Please sign in.");

        $("#signUpPanel").hide();
        $("#signInPanel").fadeIn(200);

        this.reset();
    });


    /* -------------------------------------------
       3. jQuery Component #1 - Accordion (FAQ)
    ------------------------------------------- */

    $(".accordion-splash .accordion-header").on(
        "click",
        function () {

            var $header = $(this);
            var $body = $header.next(".accordion-body");
            var $item = $header.closest(".accordion-item");


            /* Close other open items */

            $item
                .siblings()
                .find(".accordion-body")
                .slideUp(250);

            $item
                .siblings()
                .find(".accordion-header")
                .removeClass("active");


            /* Toggle current */

            $header.toggleClass("active");

            $body.slideToggle(250);
        }
    );


    /* -------------------------------------------
       4. jQuery Component #2 - Ajax Testimonials
          Loads JSON via $.ajax and renders cards
    ------------------------------------------- */

    function loadTestimonials() {

        var $container = $("#testimonials-container");

        if (!$container.length) return;

        $container.html(
            '<p class="text-muted">Loading testimonials...</p>'
        );

        $.ajax({

            url: "data/testimonials.json",
            method: "GET",
            dataType: "json",

            success: function (data) {

                $container.empty();

                if (data.testimonials && data.testimonials.length) {

                    $.each(
                        data.testimonials,
                        function (i, item) {

                            var card =
                                '<div class="testimonial-card">' +
                                '<p class="quote">' +
                                item.quote +
                                "</p>" +
                                '<p class="author">' +
                                item.author +
                                "</p>" +
                                "</div>";

                            $container.append(card);
                        }
                    );

                } else {

                    $container.html(
                        "<p>No testimonials available.</p>"
                    );
                }
            },

            error: function () {

                $container.html(
                    "<p>Unable to load testimonials. Please try again later.</p>"
                );
            }
        });
    }


    /* About page: show + Ajax-load testimonials
       when markup link is clicked */

    $("#loadTestimonialsBtn").on("click", function (e) {

        e.preventDefault();

        var $section = $("#testimonials");

        $section.slideDown(300);

        if (!$section.data("loaded")) {

            loadTestimonials();

            $section.data("loaded", true);
        }

        $("html, body").animate(
            {
                scrollTop: $section.offset().top - 80
            },
            400
        );
    });


    /* Auto-load only if section is visible on page load */

    if (
        $("#testimonials-container").length &&
        $("#testimonials").is(":visible")
    ) {
        loadTestimonials();
    }


    /* -------------------------------------------
       5. Ajax Locations (locations page)
    ------------------------------------------- */

    function loadLocationsAjax() {

        var $target = $("#ajax-locations");

        if (!$target.length) return;

        $.ajax({

            url: "data/locations.json",
            method: "GET",
            dataType: "json",

            success: function (data) {

                var html = "";

                $.each(data.regions, function (i, region) {

                    html +=
                        '<div class="location-group">';

                    html +=
                        "<h4>" +
                        region.name +
                        "</h4><ul>";

                    $.each(
                        region.locations,
                        function (j, loc) {

                            html +=
                                '<li><a href="' +
                                loc.url +
                                '">' +
                                loc.name +
                                "</a></li>";
                        }
                    );

                    html += "</ul></div>";
                });

                $target.html(html);
            },

            error: function () {

                /* Fallback: keep static HTML already in page */

                console.warn(
                    "Could not load locations via Ajax; using static markup."
                );
            }
        });
    }

    loadLocationsAjax();


    /* -------------------------------------------
       6. Contact form cards - open contact modal
    ------------------------------------------- */

    $(document).on(
        "click",
        "[data-contact-type]",
        function (e) {

            e.preventDefault();

            var type = $(this).data("contact-type");

            $("#contactFormType").val(type);
            $("#contactModalLabel").text(type);
            $("#contactModal").modal("show");
        }
    );


    $("#contactForm").on("submit", function (e) {

        e.preventDefault();

        var type = $("#contactFormType").val();
        var name = $("#contactName").val().trim();
        var email = $("#contactEmail").val().trim();
        var message = $("#contactMessage").val().trim();

        if (!name || !email || !message) {

            alert("Please complete all fields.");

            return;
        }

        alert(
            "Thank you, " +
            name +
            "! Your \"" +
            type +
            "\" message has been sent. A Splashes representative will get back to you soon."
        );

        $("#contactModal").modal("hide");

        this.reset();
    });


    /* -------------------------------------------
       7. Smooth close mobile nav on link click
    ------------------------------------------- */

    $(".navbar-splash .nav-link").on("click", function () {

        if ($(window).width() < 992) {

            $(".navbar-collapse").collapse("hide");
        }
    });

})(jQuery);
