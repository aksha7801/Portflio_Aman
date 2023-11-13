$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('.nav-item a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
