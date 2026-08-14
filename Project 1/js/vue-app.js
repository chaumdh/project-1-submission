/**
 * Splashes Aquatics - Vue.js Component
 * Simple newsletter signup component featured on pages
 * Uses in-DOM template so the runtime Vue build works with CDN
 */

(function () {
    "use strict";

    var root = document.getElementById("vue-newsletter");
    if (!root) return;

    /* Inject template markup into the mount point */
    root.innerHTML =
        '<div class="vue-newsletter">' +
            '<div class="container-custom">' +
                '<h3>Stay in the Swim</h3>' +
                '<p>Get updates on classes, camps, and special offers from Splashes.</p>' +

                '<div v-if="!submitted" class="newsletter-form">' +
                    '<input type="email" v-model="email" placeholder="Your email address" aria-label="Email for newsletter">' +
                    '<button type="button" class="btn-splash btn-primary-splash" v-on:click="subscribe">Subscribe</button>' +
                '</div>' +

                '<p v-if="error" style="color:#ff8a8a;margin-top:10px;">{{ error }}</p>' +

                '<p v-if="submitted" class="success-msg">' +
                    'Thanks for subscribing! Check your inbox soon.' +
                    '<br><button type="button" class="btn-splash btn-outline-splash" style="margin-top:12px;color:#fff;border-color:#fff;" v-on:click="resetForm">Subscribe another</button>' +
                '</p>' +
            '</div>' +
        '</div>';

    new Vue({
        el: "#vue-newsletter",

        data: {
            email: "",
            submitted: false,
            error: ""
        },

        methods: {
            subscribe: function () {
                this.error = "";

                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!this.email.trim()) {
                    this.error = "Please enter your email address.";
                    return;
                }

                if (!emailPattern.test(this.email)) {
                    this.error = "Please enter a valid email address.";
                    return;
                }

                this.submitted = true;
                this.email = "";
            },

            resetForm: function () {
                this.submitted = false;
                this.error = "";
            }
        }
    });

})();
