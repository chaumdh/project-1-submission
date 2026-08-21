$(document).ready(function() {
    $('.page-heading').addClass('d-flex flex-column justify-content-center align-items-center');
    $('.page-heading').append('<h1 class="text-white font-weight-bold text-center">Learning it the Right Way, Right from the Beginning</h1>');
    
    $('.page-heading').append('<div class="page-heading-buttons"></div>');
    $('.page-heading-buttons').addClass('d-flex justify-content-center align-items-center');
    $('.page-heading-buttons').append('<button class="btn btn-outline-primary rounded-pill bg-white p-4">Informational Video</button>');
    $('.page-heading-buttons').append('<button class="btn btn-outline-primary rounded-pill bg-white p-4">Swimvenger Video</button>');

    // Define the HTML element you want to add
    const newElement = '<div id="home-locations-map" class="d-grid justify-content-end col-6"></div>';
    const breakpoint = 1200;

    function handleScreenSize() {
        const windowWidth = $(window).width();

        // Check if the element already exists in the DOM
        const elementExists = $('#home-locations-map').length > 0;

        if (windowWidth >= breakpoint) {
            // Add the element if it does not already exist
            if (!elementExists) {
                $('#home-locations').append(newElement);
            }
        } else {
            // Remove the element if it exists on smaller screens
            if (elementExists) {
                $('#home-locations-map').remove();
            }
        }
    }

    // Run once on page load
    handleScreenSize();

    // Run every time the window is resized
    $(window).on('resize', handleScreenSize);
});

// TODO 
// reduce the logo size on smaller screens
// fix 2 buttons on heading for differnt screen sizes
// find a location near you, and at diff screen sizes
// header nav + button: add styling for hover