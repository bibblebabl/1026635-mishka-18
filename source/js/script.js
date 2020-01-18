var mainNavLists = document.querySelectorAll('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle');

var toggleMainNavClosed = function () {
  mainNavLists.forEach(function(list) {
    var isClosed = list.classList.contains('main-nav__list--closed')
    list.classList.toggle('main-nav__list--closed', !isClosed);
    navToggle.classList.toggle('main-nav__toggle--open', !isClosed);
  })
}

toggleMainNavClosed()

navToggle.addEventListener('click', toggleMainNavClosed);
