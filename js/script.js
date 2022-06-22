// html, css, js 로딩완료
$(document).ready();
// html, css, js, 멀티미디어까지 로딩완료
window.onload = function () {
  // visual 슬라이드
  new Swiper('.sw-visual',{
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation:{
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next'
    },
    // speed: 500
  });
  // items 슬라이드
  new Swiper('.sw-items',{
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 800,
    navigation:{
      prevEl: '.sw-items-prev',
      nextEl: '.sw-items-next'
    },
    pagination: {
      el: '.sw-items-pg'
    }
  });
  new Swiper('.sw-beverage',{
  loop:true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 800,
  navigation:{
    prevEl: '.sw-beverage-prev',
    nextEl: '.sw-beverage-next'
  },
  pagination:{
    el: '.sw-beverage-pg',
    type: 'fraction'
  }
  });
}
