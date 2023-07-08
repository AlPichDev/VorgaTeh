

const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    zoom: {
        maxRatio: 3,
    },

    // effect: 'cards',
    // cardsEffect: {
    //     slideShadows: false,
    //     perSlideOffset: 1,
    //     perSlideRotate: 3,
    // },
    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    zoom: {
        maxRatio: 3,
    },

    // effect: 'cards',
    // cardsEffect: {
    //     slideShadows: false,
    //     perSlideOffset: 1,
    //     perSlideRotate: 3,
    // },
    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    
});