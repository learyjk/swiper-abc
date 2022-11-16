// core version + navigation, pagination modules:
import Swiper, { EffectCoverflow, Navigation, Pagination, A11y } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
//import 'swiper/css/effect-coverflow'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const init = () => {
    console.log('loaded')
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination, EffectCoverflow, A11y],

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        effect: 'coverflow',


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    console.log('swiper loaded')
}

document.addEventListener("DOMContentLoaded", init)