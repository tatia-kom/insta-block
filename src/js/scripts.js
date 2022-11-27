$(document).ready(function() {
    $('.header__mobile-menu').click(function(e) {
        e.preventDefault();
        $('.header').addClass('header--opened');
        $('body').addClass('fixed');
    });

    $('.header__mobile-close').click(function(e) {
        e.preventDefault();
        $('.header').removeClass('header--opened');
        $('body').removeClass('fixed');
    });

    $('.price-item').mouseover(function() {
        $('.price-item--active .button').addClass('button--disabled');
        $('.price-item--active').removeClass('price-item--active');
        $(this).addClass('price-item--active');
        $(this).find('.button--disabled').removeClass('button--disabled');
    });

    $('.price-item').mouseleave(function() {
        $(this).removeClass('price-item--active');
        $(this).find('.button').addClass('button--disabled');
        $('.price-item:nth-child(2)').addClass('price-item--active');
        $('.price-item:nth-child(2) .button').removeClass('button--disabled');
    });

    $('.faq-item__trigger').click(function(e) {
        e.preventDefault();
        $('.faq-item--opened').removeClass('faq-item--opened');
        $(this).parents('.faq-item').toggleClass('faq-item--opened');
    });

    $('a.scroll-to').on('click', function(e) {
        e.preventDefault();

        $('.header').removeClass('header--opened');
        $('body').removeClass('fixed');

        var anchor = $(this).attr('href');
        var top = anchor !== '#top' ? $(anchor).offset().top - 100 : 0

        $('html, body').stop().animate({
            scrollTop: top
        }, 800);
    });

    // carousel

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        dots: true,
        dotsContainer: '.reviews__dots',
        responsive: {
            0: {
                items: 1,
                margin: 12,
            },
            992: {
                items: 2,
                margin: 30,
            },
            1400: {
                items: 3,
                margin: 66,
            }
        }
    });

    $('.reviews__prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    $('.reviews__next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    // modal

    $('.modal-open').click(function(e) {
        e.preventDefault();

        $('body').addClass('fixed');
        $('.modal').addClass('modal--opened');
    });

    $('.modal__close').click(function(e) {
        e.preventDefault();

        $('.modal').removeClass('modal--opened');
        $('.modal__form').removeClass('hidden');
        $('.modal__success').addClass('hidden');
        $('body').removeClass('fixed');
    });

    $('.modal__background').click(function(e) {
        e.preventDefault();

        $('.modal').removeClass('modal--opened');
        $('.modal__form').removeClass('hidden');
        $('.modal__success').addClass('hidden');
        $('body').removeClass('fixed');
    });

    // animations

    $(window).on('scroll', function() {
        const top = $(window).scrollTop();

        if (top > 0) {
            $('.header').addClass('header--scroll');
        }
        else {
            $('.header').removeClass('header--scroll');
        }

    });

    // form

    $('#modalForm').submit(function(event) {
        event.preventDefault();

        var form = $(this);
        var serializedData = form.serialize();

        $.ajax({
            url: "/mailto.php",
            type: "POST",
            data: serializedData,
            success: function() {
                $('.modal__form').addClass('hidden');
                $('.modal__success').removeClass('hidden');
                form.find('input').value('');
                form.find('textarea').value('');
            }
        });
    });
});