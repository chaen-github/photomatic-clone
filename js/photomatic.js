// 메인배너 스와이프 스크립트
let swiper = new Swiper('.main_banner .swiper-container', {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 500
});

// middle_pic 스크롤
$(this).on("scroll", ()=>{
    if(window.scrollY > 400){
        $('#middle_pic').css({'opacity':'1'});
        $('.middle_text').css({'opacity':'1'});
        let small_text_timeout = setTimeout( () => {
            $('.middle_small_text').css({'opacity':'1'});
            $('.about_more').css({'opacity':'1'});
            clearTimeout(small_text_timeout);
        },500);
    }
});


