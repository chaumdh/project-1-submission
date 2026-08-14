$(document).ready(function() {
    $('footer').html(`
        <div class="footer-container">
            
            <!-- SECTION 1: Logo, Main Links, and Social Icons -->
            <div class="footer-section-top">
                <div class="footer-logo text-center mb-4">
                    <img src="images/logo-small.png" alt="Splashes Logo" width="200">
                </div>
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                    <ul class="footer-nav list-inline mb-3 mb-md-0">
                        <li class="list-inline-item"><a href="about.html">About</a></li>
                        <li class="list-inline-item"><a href="locations.html">Locations</a></li>
                        <li class="list-inline-item"><a href="faqs.html">FAQs</a></li>
                        <li class="list-inline-item"><a href="contact.html">Contact</a></li>
                        <li class="list-inline-item"><a href="signin.html">Register / Sign In</a></li>
                        <li class="list-inline-item"><a href="careers.html">Careers</a></li>
                    </ul>
                    <div class="footer-social">
                        <a href="#" class="social-icon linkedin" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
                        <a href="#" class="social-icon instagram" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
                        <a href="#" class="social-icon twitter" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="social-icon yelp" aria-label="Yelp"><i class="fa fa-yelp"></i></a>
                        <a href="#" class="social-icon facebook" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="social-icon youtube" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
                    </div>
                </div>
            </div>

            <hr class="footer-divider">

            <!-- SECTION 2: Regional Phone Numbers -->
            <div class="footer-section-middle">
                <div class="row text-center">
                    <div class="col-6 col-md mb-3 mb-md-0">
                        <h6>Orange County</h6>
                        <a href="tel:9494500777">(949) 450-0777</a>
                    </div>
                    <div class="col-6 col-md mb-3 mb-md-0">
                        <h6>San Diego County</h6>
                        <a href="tel:7606039400">(760) 603-9400</a>
                    </div>
                    <div class="col-6 col-md mb-3 mb-md-0">
                        <h6>Los Angeles County</h6>
                        <a href="tel:6268361200">(626) 836-1200</a>
                    </div>
                    <div class="col-6 col-md mb-3 mb-md-0">
                        <h6>Northern California</h6>
                        <a href="tel:4082791700">(408) 279-1700</a>
                    </div>
                    <div class="col-6 col-md mb-3 mb-md-0">
                        <h6>Denver</h6>
                        <a href="tel:7203447700">(720) 344-7700</a>
                    </div>
                </div>
            </div>

            <hr class="footer-divider">

            <!-- SECTION 3: Affiliate Logos & Copyright -->
            <div class="footer-section-bottom d-flex justify-content-between align-items-center flex-wrap">
                <div class="footer-partners d-flex align-items-center flex-wrap my-2">
                    <img src="images/partner1.png" alt="US Swim School Association" class="img-fluid mr-3">
                    <img src="images/partner2.png" alt="NDPA" class="img-fluid mr-3">
                    <img src="images/partner3.png" alt="ISSA" class="img-fluid mr-3">
                    <img src="images/partner4.png" alt="Stop Drowning Now" class="img-fluid mr-3">
                </div>
                <div class="footer-copyright text-right my-2">
                    <p class="mb-0">&copy; 2022 Splashes.</p>
                    <p class="mb-0">All Rights Reserved</p>
                </div>
            </div>

        </div>
    `);
});