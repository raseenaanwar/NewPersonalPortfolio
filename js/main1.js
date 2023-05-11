"use strict";

// loader
var loader = function () {
    setTimeout(function () {
        var loader = document.querySelector('#loader');
        if (loader) {
            loader.classList.remove('show');
        }
    }, 1);
};
loader();


// Initiate the wowjs
new WOW().init();


// Back to top button
window.addEventListener('scroll', function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        if (window.pageYOffset > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }
});
var backToTopButton = document.querySelector('.back-to-top');
if (backToTopButton) {
    backToTopButton.addEventListener('click', function () {
        var scrollOptions = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        window.scrollTo(scrollOptions);
    });
}


// Sticky Navbar
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.pageYOffset > 0) {
            navbar.classList.add('nav-sticky');
        } else {
            navbar.classList.remove('nav-sticky');
        }
    }
});


// Smooth scrolling on the navbar links
var navbarLinks = document.querySelectorAll(".navbar-nav a");
navbarLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var scrollToElement = document.querySelector(this.hash);
            var scrollToElementTop = scrollToElement.offsetTop - 45;

            var scrollOptions = {
                top: scrollToElementTop,
                left: 0,
                behavior: 'smooth'
            };
            window.scrollTo(scrollOptions);

            if (this.parentNode.classList.contains('navbar-nav')) {
                var navbarLinks = document.querySelectorAll(".navbar-nav a");
                navbarLinks.forEach(function (link) {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        }
    });
});


// Typed Initiate
var heroTextH2 = document.querySelector('.hero .hero-text h2');
if (heroTextH2 && heroTextH2.childElementCount == 1) {
    var typedStrings = heroTextH2.querySelector('.typed-text').textContent;
    var typed = new Typed(heroTextH2, {
        strings: typedStrings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}


// Skills
var skillsSection = document.querySelector('.skills');
if (skillsSection) {
    var skillsWaypoint = new Waypoint({
        element: skillsSection,
        handler: function () {
            var progressBarElements = document.querySelectorAll('.progress .progress-bar');
            progressBarElements.forEach(function (progressBar) {
                progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
            });
            this.destroy();
        },
        offset: '80%'
    });
}


// Testimonials carousel
var testimonialsCarousel = document.querySelector('.testimonials-carousel');
if (testimonialsCarousel) {
    var owlCarousel = new OwlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    testimonialsCarousel.appendChild(owlCarousel.owl.$el);
}


// Portfolio filter
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioFilter = document.getElementById('portfolio-filter');
if (portfolioFilter) {
    portfolioFilter.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            const filterValue = e.target.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filterValue === '*' || filterValue === item.getAttribute('data-category')) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
            // Filter active class
            const filterActive = document.querySelector('#portfolio-filter li.filter-active');
            filterActive.classList.remove('filter-active');
            e.target.classList.add('filter-active');
        }
    });
}
