$(document).ready(function() {
    $('#container').prepend('<div class="sticky-nav-bar sticky-top"></div>');
    $('header').append('<div class="page-heading"></div>'); // to use for the title of every page

    $('.sticky-nav-bar').append('<nav class="navbar navbar-expand-xl navbar-dark" id="main-menu"></nav>');

    $('#main-menu').append(`
        <a class="navbar-brand" href="home.html">
            <img src="images/logo-small.png" alt="Splashes Logo">
        </a>
    `);
    // TODO: fix styling for hamburger button
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

                <!-- LOCATIONS DROPDOWN -->
                <li class="nav-item dropdown position-static">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Locations
                    </a>
                    <div class="dropdown-menu location-card w-100 p-4 border-0 shadow" aria-labelledby="navbarDropdown">
                        <div class="container-fluid p-0">


                            <div class="row">
                                <!-- Left Column -->
                                <div class="col-6">
                                    <div class="location-group mb-3">
                                        <h6 class="location-title">Orange County</h6>
                                        <a class="dropdown-item" href="#">Anaheim Hills @ LA Fitness</a>
                                        <a class="dropdown-item" href="#">Huntington Beach</a>
                                        <a class="dropdown-item" href="#">Irvine</a>
                                        <a class="dropdown-item" href="#">Yorba Linda @ LA Fitness</a>
                                    </div>

                                    <div class="location-group mb-3">
                                        <h6 class="location-title">Silicon Valley</h6>
                                        <a class="dropdown-item" href="#">North San Jose @ City Sports Club</a>
                                        <a class="dropdown-item" href="#">San Jose-Almaden @ City Sports Club</a>
                                        <a class="dropdown-item" href="#">San Jose-Bascom</a>
                                        <a class="dropdown-item" href="#">San Jose-Blossom Hill @ City Sports Club</a>
                                        <a class="dropdown-item" href="#">Sunnyvale @ City Sports Club</a>
                                    </div>

                                    <div class="location-group mb-3">
                                        <h6 class="location-title">Los Angeles County</h6>
                                        <a class="dropdown-item" href="#">Culver City @ LA Fitness</a>
                                        <a class="dropdown-item" href="#">Harbor City @ LA Fitness</a>
                                    </div>

                                    <div class="location-group">
                                        <h6 class="location-title">San Francisco</h6>
                                        <a class="dropdown-item" href="#">San Francisco-20th Avenue @ City Sports Club</a>
                                    </div>
                                </div>

                                <!-- Right Column -->
                                <div class="col-6">
                                    <div class="location-group mb-3">
                                        <h6 class="location-title">San Gabriel Valley</h6>
                                        <a class="dropdown-item" href="#">Alhambra-Fremont @ LA Fitness</a>
                                        <a class="dropdown-item" href="#">Arcadia @ LA Fitness</a>
                                        <a class="dropdown-item" href="#">Diamond Bar @ LA Fitness</a>
                                        <a class="dropdown-item" href="#">Pasadena</a>
                                        <a class="dropdown-item" href="#">West Covina @ LA Fitness</a>
                                    </div>

                                    <div class="location-group mb-3">
                                        <h6 class="location-title">San Diego County</h6>
                                        <a class="dropdown-item" href="#">Carlsbad</a>
                                        <a class="dropdown-item" href="#">Poway @ LA Fitness</a>
                                    </div>

                                    <div class="location-group mb-3">
                                        <h6 class="location-title">Alameda County</h6>
                                        <a class="dropdown-item" href="#">Hayward @ City Sports Club</a>
                                    </div>

                                    <div class="location-group">
                                        <h6 class="location-title">Denver</h6>
                                        <a class="dropdown-item" href="#">Highlands Ranch</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact Us</a>
                </li>
                
                
                <li class="nav-item mx-3">
                    <button id="signin-btn" class="btn btn-outline-primary rounded-pill w-100" onclick="window.location.href='signin.html'">Register / Sign In</button>
                </li>
            </ul>
        </div>
    `);
});
