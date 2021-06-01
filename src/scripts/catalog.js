import '../styles/catalog.less';

/*
//change behavior of header navigation menu and filter on catalog page in case of samartphones
(function(){
  const MEDIA_QUERY = window.matchMedia("(max-width: 600px)");
  let menuButton = document.getElementById('menu-button'),
      navNode = document.getElementsByClassName('main-nav--header')[0],
      modalCloseButton = document.querySelector('.close-button'),
      modalResetButton = document.querySelector('.reset-button'),
      formNode = document.querySelector('.filter'),
      formDetailsNode = document.querySelector('.filter > details');

  if (MEDIA_QUERY.matches) {
    menuButton.addEventListener('change', function(){
      navNode.classList.toggle('main-nav--header--opened');
    });
    
    modalCloseButton.addEventListener('click', function(){
      formDetailsNode.removeAttribute('open');
    })
    
    modalResetButton.addEventListener('click', function(){
      formNode.reset();
      setLeftValue();
      setRightValue();
    })
  } else {
    menuButton.removeEventListener('change', function(){});
    modalCloseButton.removeEventListener('click', function(){});
    modalResetButton.removeEventListener('click', function(){});
  }
})();
//


//price range for filter on catalog page
let inputLeft = document.getElementById('input-left'),
    inputRight = document.getElementById('input-right'),
    thumbLeft = document.querySelector('.slider > .thumb.left'),
    thumbRight = document.querySelector('.slider > .thumb.right'),
    range  = document.querySelector('.slider > .range'),
    priceLeft = document.querySelector('.slider > .price-left'),
    priceRight = document.querySelector('.slider > .price-right');

function setLeftValue(){
  let min = parseInt(inputLeft.min),
      max = parseInt(inputLeft.max);
  
  inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 1);

  let percent = ((inputLeft.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + '%';
  range.style.left = percent + '%';
  
  priceLeft.style.left = (percent - 7) + '%';
  priceLeft.textContent = '$ ' + inputLeft.value;
}
setLeftValue();

function setRightValue(){
  let min = parseInt(inputRight.min),
      max = parseInt(inputRight.max);
  
  inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 1);

  let percent = ((inputRight.value - min) / (max - min)) * 100;

  thumbRight.style.right = (100 - percent) + '%';
  range.style.right = (100 - percent) + '%';
  
  priceRight.style.right = (93 - percent) + '%';
  priceRight.textContent = '$ ' + inputRight.value;
}
setRightValue();

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);
//


//example of loading more items on click on catalog page
let itemsContainer = document.querySelector('.items'),
    item = document.querySelectorAll('.item')[0],
    fragment = document.createDocumentFragment(),
    buttonLoader = document.querySelector('.item-loader .btn'),
    currentCounterNode = document.querySelector('.current-items'),
    restCounterNode = document.querySelector('.left-items'),
    progressBarNode = document.getElementById('loader-bar'),
    
maxItems = parseInt(restCounterNode.textContent),
loadedItems = parseInt(currentCounterNode.textContent),
restItems = maxItems - loadedItems;

function loadItems(batch) {
    for(let cnt = 0; cnt < batch; cnt++) {
      let itemClone = item.cloneNode(true);
      fragment.appendChild(itemClone);
    }
    itemsContainer.appendChild(fragment);
    currentCounterNode.textContent = loadedItems += batch;
    progressBarNode.value = currentCounterNode.textContent;
    restItems -= batch;
    console.log(restItems);
    if(restItems === 0) {
      buttonLoader.removeEventListener('click', loadItems.bind());
      buttonLoader.disabled = true;
    }
}

buttonLoader.addEventListener('click', loadItems.bind(this, 4));
//
*/