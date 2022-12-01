document.addEventListener('DOMContentLoaded', function () {
    const btnOpenNav = document.querySelector('.js-open-nav');
    const btnCloseNav = document.querySelector('.js-close-nav');
    const navBar = document.querySelector('.nav');
    
    const openNav = () => {
      navBar.classList.add('nav--is-visible');
    }
    
    const closeNav = () => {
      navBar.classList.remove('nav--is-visible');
    }
    
    btnOpenNav.addEventListener('click', openNav);
    btnCloseNav.addEventListener('click', closeNav);
  }, false);

