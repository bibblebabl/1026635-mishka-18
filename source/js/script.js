var mainNavLists = document.querySelectorAll('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle');
var modalButtons = document.querySelectorAll('.button--modal');
var modal = document.querySelector('.modal');

var ESC_KEYCODE = 27

var toggleMainNavClosed = () => {
  mainNavLists.forEach(listItem => {
    var isClosed = listItem.classList.contains('main-nav__list--closed')
    listItem.classList.toggle('main-nav__list--closed', !isClosed);
    navToggle.classList.toggle('main-nav__toggle--open', !isClosed);
  })
}

var onModalOverlayClick = evt => {
  var isOverlay = evt.target.classList.contains('modal__overlay')
  if (isOverlay) {
    evt.preventDefault()
    hideModal()
    window.removeEventListener("click", onModalOverlayClick);
  }
}

var hideModal = () => {
  modal.classList.toggle('modal--visible', false);
  window.removeEventListener("keydown", onEscKeyDown);
}

var onModalButtonClick = evt => {
  evt.preventDefault()
  var isOpen = evt.target.classList.contains('modal--visible')
  modal.classList.toggle('modal--visible', !isOpen);
  window.addEventListener("keydown", onEscKeyDown);
  window.addEventListener("click", onModalOverlayClick);
}

var onEscKeyDown = evt => {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    hideModal()
  }
}

modalButtons.forEach(button => {
  button.addEventListener('click', onModalButtonClick)
})

navToggle.addEventListener('click', toggleMainNavClosed);

toggleMainNavClosed()
