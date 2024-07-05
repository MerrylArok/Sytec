
var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {    
    950: {
      slidesPerView: 2,
      spaceBetween: 50,
    }
    },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 

});