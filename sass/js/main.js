//All callback initiations and custom functions

//custom swiper slideshow initialized
function introSwiper() {
    var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    keyboardControl: true,
    grabCursor: true,
    loop: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: true,
    parallax: true,
    speed: 600,
    effect: 'fade',
    paginationBulletRender: function(swiper, index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
});
    
}

introSwiper();



