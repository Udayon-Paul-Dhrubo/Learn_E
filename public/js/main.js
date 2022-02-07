(function($) {
    "use strict";


    //SEARCH BOX
    $("#sf-box").on('click', function() {
        $(".sf-list").fadeIn();
    });
    $(".sf-list").mouseleave(function() {
        $(".sf-list").fadeOut();
    });
    $(".search-top").mouseleave(function() {
        $(".sf-list").fadeOut();
    });
    $('.sdb-btn-edit').hover(function() {
        $(this).text("Click to edit my profile");
    });
    $('.sdb-btn-edit').mouseleave(function() {
        $(this).text("edit my profile");
    });

    // Dropdown on mouse hover
    $(document).ready(function() {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function() {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function() {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);