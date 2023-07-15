$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })
    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 6,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
    })
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonial__slider').slick({
        arrows:false,
        dots: true,
        appendDots: $('.testimonial__dots'),
        waitForAnimate: false,
    })
    $('.testimonial__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonial__prev').slick('slickPrev')
    })
    $('.testimonial__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonial__next').slick('slickNext')
    })

})
