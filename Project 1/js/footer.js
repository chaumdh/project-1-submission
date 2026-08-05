$(document).ready(function() {
    $('footer').append('<div id="footer1"></div>');
    $('footer').append('<div id="footer2"></div>');
    $('footer').append('<div id="footer3"></div>');

    // footer section 1
    $('#footer1').append('<img id="footer-logo" src="images/wave-small.png">');

    $('#footer1').append('<nav id="footer-menu"></nav>');
    $('#footer-menu').append(`
        <ul>
            <!-- <li class="active"><a href="index.html">Home</a></li> -->
            <li><a href="about.html">About</a></li>
            <li><a href="locations.html">Locations</a></li>
            <li><a href="faqs.html">FAQs</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="signin.html">Register / Sign In</a></li>
            <li><a href="careers.html">Careers</a></li>
        </ul>
    `);

    $('#footer1').append('<div id="social"></div>');
    $('#social').append(`
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-yelp"></a>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-youtube"></a>
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