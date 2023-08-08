let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
})

menuLinks.forEach(function(el) {
  burger.classList.remove('burger--active')
  menu.classList.remove('header__nav--active')
})

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  sliderMove: {
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    1745: {
    }
  }

});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element) {element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

let searchForm = document.querySelector('#search-form'),
    searchBtnOpen = document.querySelector('.header__search'),
    searchBtn = document.querySelector('#search-form__search'),
    searchBtnClose = document.querySelector('#search-form__close');
searchBtnOpen.addEventListener('click', function(el) {
  searchForm.classList.add('section-header__search-form-active');
  searchBtnOpen.classList.add('section-header__search-close')
});
searchBtnClose.addEventListener('click', function() {
  searchForm.classList.remove('section-header__search-form-active');
  searchBtnOpen.classList.remove('section-header__search-close')
});
