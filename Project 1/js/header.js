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

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Location
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <!-- Column 1 -->
                                <div class="col-md-4">
                                    <div class="location-group mb-4">
                                        <h6 class="font-weight-bold text-dark mb-2">Orange County</h6>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Anaheim Hills @ LA Fitness</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Huntington Beach</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Irvine</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Yorba Linda @ LA Fitness</a>
                                    </div>

                                    <div class="location-group mb-4">
                                        <h6 class="font-weight-bold text-dark mb-2">San Diego County</h6>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Carlsbad</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Poway @ LA Fitness</a>
                                    </div>

                                    <div class="location-group">
                                        <h6 class="font-weight-bold text-dark mb-2">San Francisco</h6>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">San Francisco-20th Avenue @ City Sports Club</a>
                                    </div>
                                </div>

                                <!-- Column 2 -->
                                <div class="col-md-4">
                                    <div class="location-group mb-4">
                                        <h6 class="font-weight-bold text-dark mb-2">San Gabriel Valley</h6>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Alhambra-Fremont @ LA Fitness</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Arcadia @ LA Fitness</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Diamond Bar @ LA Fitness</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Pasadena</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">West Covina @ LA Fitness</a>
                                    </div>

                                    <div class="location-group">
                                        <h6 class="font-weight-bold text-dark mb-2">Los Angeles County</h6>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Culver City @ LA Fitness</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Harbor City @ LA Fitness</a>
                                    </div>
                                </div>

                                <!-- Column 3 -->
                                <div class="col-md-4">
                                    <div class="location-group mb-4">
                                        <h6 class="font-weight-bold text-dark mb-2">Silicon Valley</h6>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">North San Jose @ City Sports Club</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">San Jose-Almaden @ City Sports Club</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">San Jose-Bascom</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">San Jose-Blossom Hill @ City Sports Club</a>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Sunnyvale @ City Sports Club</a>
                                    </div>

                                    <div class="location-group mb-4">
                                        <h6 class="font-weight-bold text-dark mb-2">Alameda County</h6>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Hayward @ City Sports Club</a>
                                    </div>

                                    <div class="location-group">
                                        <h6 class="font-weight-bold text-dark mb-2">Denver</h6>
                                        <a class="dropdown-item p-0 text-primary mb-1" href="#">Highlands Ranch</a>
                                    </div>
                                </div>
                        </div>
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





