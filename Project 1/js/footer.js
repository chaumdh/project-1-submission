$(document).ready(function() {
    $('footer').append('<div id="footer1"></div>');
    $('footer').append('<div id="footer2"></div>');
    $('footer').append('<div id="footer3"></div>');

    // footer section 1
    $('#footer1').append(`
        <div class="footer-logo"><img src="images/wave-small.png" alt="Splashes"></div>
        <div class="footer-nav-row">
            <nav class="footer-links" aria-label="Graphics/footer-logo-wave-small.pngFooter navigation">
            <a href="about.html">About</a>
            <a href="locations.html">Locations</a>
            <a href="swim-lessons.html#faq">FAQs</a>
            <a href="contact.html">Contact</a>
            <a href="#" data-open-signin>Register / Sign In</a>
            <a href="#">Careers</a>
            </nav>
            <div class="social-icons">
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Yelp"><i class="fab fa-yelp"></i></a>
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    `);

    // footer section 2
    $('#footer2').append(`
        <div class="site-phone">
            <p>Orange County</p>
            <p>(949) 450-0777</p>
        </div>
        <div class="site-phone">
            <p>San Diego County</p>
            <p>(760) 603-9400</p>
        </div>
        <div class="site-phone">
            <p>Los Angeles County</p>
            <p>(626) 836-1200</p>
        </div>
        <div class="site-phone">
            <p>Northern California</p>
            <p>(408) 279-1700</p>
        </div>
        <div class="site-phone">
            <p>Denver</p>
            <p>(720) 344-7700</p>
        </div>
    `);

    // footer section 3
    $('#footer3').append('<div id="sponsors"></div>');
    $('#sponsors').append(`
        <img src="images/sponsors/footer-usssa-logo-2.png">
        <img src="images/sponsors/footer-ndpa-logo.png">
        <img src="images/sponsors/footer-member-issa-logo.png">
        <img src="images/sponsors/footer-stop-drowning-now-logo.png">
    `);

    $('#footer3').append('<div id="copyright"></div>');
    $('#copyright').append('<div class="copy">&copy; 2022 Splashes</div>');
    $('#copyright').append('<p>All Rights Reserved</p>');
});