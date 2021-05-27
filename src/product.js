import './styles/product.less';

/*
//change behavior of header navigation menu on product page in case of smartphones
(function(){
  const MEDIA_QUERY = window.matchMedia('(max-width: 600px)');
  let menuButton = document.getElementById('menu-button'),
      navNode = document.getElementsByClassName('main-nav--header')[0];

  if (MEDIA_QUERY.matches) {
    menuButton.addEventListener('change', function(){
      navNode.classList.toggle('main-nav--header--opened');
    });
  } else {
    menuButton.removeEventListener('change', function(){});
  }
})();
//


//slideshow gallery (both button and thumbnail based)
let nextButton = document.querySelector('.next-slide'),
    prevButton = document.querySelector('.prev-slide');

function showNextSlide() {
  let currentFsSlide = document.querySelector('.full-img.active'),
      currentThumbSlide = document.querySelector('.thumb-img.focused');

  if (currentFsSlide.nextElementSibling) {
    currentFsSlide.classList.replace('active', 'inactive');
    currentFsSlide.nextElementSibling.classList.replace('inactive', 'active');
  } else {
    currentFsSlide.parentElement.firstElementChild.classList.replace('inactive', 'active');
    currentFsSlide.parentElement.lastElementChild.classList.replace('active', 'inactive');
  }

  if (currentThumbSlide.nextElementSibling) {
    currentThumbSlide.classList.replace('focused', 'unfocused');
    currentThumbSlide.nextElementSibling.classList.replace('unfocused', 'focused');
  } else {
    currentThumbSlide.parentElement.firstElementChild.classList.replace('unfocused', 'focused');
    currentThumbSlide.parentElement.lastElementChild.classList.replace('focused', 'unfocused');
  }
}

function showPrevSlide() {
  let currentFsSlide = document.querySelector('.full-img.active'),
      currentThumbSlide = document.querySelector('.thumb-img.focused');

  if (currentFsSlide.previousElementSibling) {
    currentFsSlide.classList.replace('active', 'inactive');
    currentFsSlide.previousElementSibling.classList.replace('inactive', 'active');
  } else {
    currentFsSlide.parentElement.lastElementChild.classList.replace('inactive', 'active');
    currentFsSlide.parentElement.firstElementChild.classList.replace('active', 'inactive');
  }

  if (currentThumbSlide.previousElementSibling) {
    currentThumbSlide.classList.replace('focused', 'unfocused');
    currentThumbSlide.previousElementSibling.classList.replace('unfocused', 'focused');
  } else {
    currentThumbSlide.parentElement.lastElementChild.classList.replace('unfocused', 'focused');
    currentThumbSlide.parentElement.firstElementChild.classList.replace('focused', 'unfocused');
  }
}

(function(){
  const MEDIA_QUERY = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
  if (MEDIA_QUERY.matches) {
    nextButton.removeEventListener('click', showNextSlide);
    prevButton.removeEventListener('click', showPrevSlide);
    console.log('listeners have been removed');
  } else {
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);
  }
})();

(function(){
  let thumbNodes = document.querySelectorAll('.thumb-img'),
      fsNodes = document.querySelectorAll('.full-img');
  for (let cnt = 0; cnt < thumbNodes.length; cnt++) {
    thumbNodes[cnt].addEventListener('click', function() {
      let currentThumb = this;
      for (let itr = 0; itr < thumbNodes.length; itr++) {
        if (currentThumb !== thumbNodes[itr]) {
          thumbNodes[itr].classList.replace('focused', 'unfocused');
          fsNodes[itr].classList.replace('active', 'inactive');
        } else {
          currentThumb.classList.replace('unfocused', 'focused');
          fsNodes[itr].classList.replace('inactive', 'active');
        }
      }
    });
  }
})();
//
*/