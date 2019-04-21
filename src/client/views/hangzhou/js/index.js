$(function () {
  //客户留言，轮播
  var serice_center_swiper = new Swiper('.serice_center_swiper .swiper-container', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    speed:2500,
    loop:true,
    slidesPerView: 'auto',
    autoplayDisableOnInteraction: false,
    waitForTransition: false,
    lazyLoading: true,
    centeredSlides: true,
  })



 
  var top_servers_swiper = new Swiper('.top_servers_swiper .swiper-container', {
    autoplay: 5000,
    loop:true,
    pagination: '.top_servers_swiper .swiper-pagination',
    paginationType: 'bullets',
    slidesPerView: 'auto',
    autoplayDisableOnInteraction: false,
    lazyLoading: true,
    centeredSlides: true,
  })
})
