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
    },
    breakpoints: {
        768: {
            parallax: false
        }
    }
});
    
}
introSwiper();

//parallax scroll initialized
function pageParallax(){new Rellax(".rellax")}
pageParallax();

//scroll reveal
window.sr = ScrollReveal();
var headerReveal = document.body.querySelectorAll('.titleRevealFromFade'),
    contentReveal = document.body.querySelectorAll('.textRevealFromFade');
sr.reveal(headerReveal, {
    origin: 'top',
    distance: '50px',
    duration: 950,
    delay: 50,
    opacity: 0,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    mobile: true,
    reset: false,
});

sr.reveal(contentReveal, {
    origin: 'right',
    distance: '55px',
    duration: 1000,
    delay: 55,
    opacity: 0,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    mobile: true,
    reset: false,
});

//feedback form input animations
(function($){
    var formGrp = $('.form-group'),
        formGrpLarge = $('.form-group-lg');
    
    // for input fields
    formGrp.mousedown(function(){
       $(this).find('label').animate({
           top: '-22px',
           fontSize: '15px'
       }, {
           duration: 95,
           easing: 'linear'
       }),
    
       $(this).find('input.form-control').addClass('focussed');
        
    });
    
    formGrp.mouseout(function(){
       $(this).find('label').animate({
           top: '0',
           fontSize: '20px'
       }, {
           duration: 95,
           easing: 'linear'
       }),
    
       $(this).find('input.form-control').removeClass('focussed'); 
    });
    
    //for textarea
    formGrpLarge.mousedown(function(){
       $(this).find('label').animate({
           top: '-22px',
           fontSize: '15px'
       }, {
           duration: 95,
           easing: 'linear'
       }),
    
       $(this).find('textarea.form-control').addClass('focussed');
        
    });
    
    formGrpLarge.mouseout(function(){
       $(this).find('label').animate({
           top: '0',
           fontSize: '20px'
       }, {
           duration: 95,
           easing: 'linear'
       }),
    
       $(this).find('textarea.form-control').removeClass('focussed'); 
    });
    
})(jQuery);