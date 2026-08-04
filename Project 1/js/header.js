$(document).ready(function() {
    $('header').append('<div class="main-header"></div>');
    $('header').append('<div class="page-heading"></div>'); // to use for the title of every page

    $('.main-header').append('<div class="logo"></div>');
    $('.main-header').append('<nav class="main-menu"></nav>');
    $('.main-header').append('<button id="signin-btn">Register / Sign In</button>');
    // TODO: fix the position for signin-btn

    $('.logo').append('<img src="images/logo-small.png" alt="Splashes Logo" width="500">');
    // $('.main-menu').css('display', 'none');
    $('.main-menu').append(
        `<ul>
            <li><a href="about.html">About</a></li>
            <li><a href="lessons.html">Swimming Lessons</a></li>
            <li><a href="swimprograms.html">Swim Programs</a></li>
            <li><a href="adultprograms.html">Adult Programs</a></li>
            <li><a href="locations.html">Locations</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>`
    );

    // TODO: if screen is larger than 1200 then make main-menu visible 
});