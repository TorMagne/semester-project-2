const openNav = document.querySelector('#open');
const closeNav = document.querySelector('#close');
const slide = document.querySelector('#slide');

const handleNav = () => {
  openNav.onclick = function () {
    if (openNav.classList.contains('block')) {
      openNav.classList.remove('block');
      openNav.classList.add('hidden');
      closeNav.classList.remove('hidden');
      closeNav.classList.add('block');
    }
    if (slide.classList.contains('-translate-x-full')) {
      slide.classList.remove('-translate-x-full');
      slide.classList.add('translate-x-0');
    }
  };
  closeNav.onclick = function () {
    if (closeNav.classList.contains('block')) {
      closeNav.classList.remove('block');
      closeNav.classList.add('hidden');
      openNav.classList.remove('hidden');
      openNav.classList.add('block');
    }
    if (slide.classList.contains('translate-x-0')) {
      slide.classList.remove('translate-x-0');
      slide.classList.add('-translate-x-full');
    }
  };
};

handleNav();
