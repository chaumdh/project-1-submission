$(document).ready(function() {
    $('.page-heading').addClass('d-flex flex-column justify-content-center align-items-center');
    $('.page-heading').append('<h1 class="text-white font-weight-bold text-center">Learning it the Right Way, Right from the Beginning</h1>');
    
    $('.page-heading').append('<div class="page-heading-buttons"></div>');
    $('.page-heading-buttons').addClass('d-flex justify-content-center align-items-center');
    $('.page-heading-buttons').append('<button class="btn btn-outline-primary rounded-pill bg-white p-4">Informational Video</button>');
    $('.page-heading-buttons').append('<button class="btn btn-outline-primary rounded-pill bg-white p-4">Swimvenger Video</button>');
});

// TODO 
// reduce the logo size on smaller 
// fix 2 buttons on heading for differnt screen sizes
// add styling for hovering over button in header
// find a location near you, and at diff screen sizes