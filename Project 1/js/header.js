$(document).ready(function() {
    $('header').append('<div class="main-header sticky-top"></div>');
    $('header').append('<div class="page-heading"></div>'); // to use for the title of every page
    // $('.page-heading').addClass('d-flex justify-content-center align-items-center');

    // $('.main-header').append('<div class="logo"></div>');
    $('.main-header').append('<nav class="navbar navbar-expand-xl navbar-dark" id="main-menu"></nav>');
    // $('.main-header').append('<button id="signin-btn">Register / Sign In</button>');
    // TODO: fix the position for signin-btn

    // $('.logo').append('<img src="images/logo-small.png" alt="Splashes Logo" width="500">');
    // $('.main-menu').css('display', 'none');
    $('#main-menu').append(`
        <a class="navbar-brand" href="home.html">
            <img src="images/logo-small.png" alt="Splashes Logo" width="500">
        </a>
    `);
    $('#main-menu').append(`
        <!-- Hamburger Menu -->
        <!-- Values for data-target and aria-controls must match id of div with the collapse class -->
        <button id="hamburger-btn" class="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
            aria-expanded="false" aria-label="Toggle navigation">
            
            <span class="navbar-toggler-icon"></span>
        </button>
    `);
    $('#main-menu').append(`
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="lessons.html">Swimming Lessons</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="swimprograms.html">Swim Programs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="adultprograms.html">Adult Programs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="locations.html">Locations</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact Us</a>
                </li>
                <li class="nav-item">
                    <button id="signin-btn">Register / Sign In</button>
                </li>
            </ul>
        </div>
    `);

    // TODO: if screen is larger than 1200 then make main-menu visible 
});