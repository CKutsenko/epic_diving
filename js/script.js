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

  // TABS

var link_href;
$('.tabs-link a').on('click', function(e){
  e.preventDefault();

  $(this)
    .closest('.tabs-list')
    .find('.tabs-link.active')
    .removeClass('active');
  $(this)
   .closest('.tabs-link')
   .addClass('active');

  $(this)
   .closest('.tabs')
   .find('.tab-item.active')
   .removeClass('active');
  link_href = $(this).attr('href');
  $(link_href).addClass('active');
});



// ACCORDION

$('.title').on('click', function(){
 if( $(this).closest('.item').is('.active') ){
  $(this)
    .closest('.accordion')
    .find('.item')
    .removeClass('active');
  }
  else {
    $(this)
     .closest('.accordion')
     .find('.item')
     .removeClass('active');
    $(this).closest('.item').addClass('active')
  }
});

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


