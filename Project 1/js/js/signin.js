$(document).ready(function () {
    $('#signin-form').on('submit', function (e) {
        e.preventDefault();

        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        if (email && password) {
            // Handle authenticating user logic here
            alert('Sign in successful!');
            window.location.href = 'index.html';
        }
    });
});