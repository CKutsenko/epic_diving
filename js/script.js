$(document).ready(function(){
  // Проверка заполнения формы в подвале
  $('#footer-form').validationEngine({promptPosition : "centerRight"});

});


var toggler = document.getElementById('toggler'),
    modalButton = document.getElementById('modalButton'),
    modalClose = document.getElementById('modalClose');

toggler.onclick = function(e) {
  e.preventDefault();
  mainNav.classList.toggle('show');
  }

  // SWIPER

  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
  }),
tO;

$(window).on('resize', function(){
  clearTimeout(tO);
  tO = setTimeout(function () {
      if($(window).width() >= 800) {
        mySwiper.destroy(true, true);
        // mySwiper = null;
        $('.swiper-wrapper').attr('style', '');
        mySwiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          loop: true,
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
        });
      }
      else {
        mySwiper.destroy(true, true);
        // mySwiper = null;
        $('.swiper-wrapper').attr('style', '');
        mySwiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
        });
      }
    }, 100);
});