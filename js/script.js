let info__slider = document.getElementById('info__slider');
let info__line1 = document.getElementById('info__line1');
let info__line2 = document.getElementById('info__line2');
let info__line3 = document.getElementById('info__line3');
let info__line4 = document.getElementById('info__line4');
let info__active = document.getElementById('info__active');

info__line1.onclick = function(){
  info__slider.style.transform = 'translateX(0)';
  info__active.style.top = '0px';
}

info__line2.onclick = function(){
  info__slider.style.transform = 'translateX(-25%)';
  info__active.style.top = '20px';
}

info__line3.onclick = function(){
  info__slider.style.transform = 'translateX(-50%)';
  info__active.style.top = '42px';
}

info__line4.onclick = function(){
  info__slider.style.transform = 'translateX(-75%)';
  info__active.style.top = '64px';
}

new Swiper('.card__wrapper', {
  loop: true,
  spaceBetween:30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      0: {
          slidesPerView: 1
      },
      758: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      },
  }
});

let slider = document.getElementById('slider');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
let line4 = document.getElementById('line4');
let active = document.getElementById('active');

line1.onclick = function(){
  slider.style.transform = 'translateX(0)';
  active.style.top = '0px';
}

line2.onclick = function(){
  slider.style.transform = 'translateX(-25%)';
  active.style.top = '80px';
}

line3.onclick = function(){
  slider.style.transform = 'translateX(-50%)';
  active.style.top = '80px';
}

line4.onclick = function(){
  slider.style.transform = 'translateX(-75%)';
  active.style.top = '80px';
}

$(document).ready(function() {
  $('.header__burger').click(function(event){
    $('.header__burger,.lower__header').toggleClass('.active');
  });
});







