(function () {
  const menuBtn = document.querySelector('.menu__btn');
  const menuList = document.querySelector('.menu__list');
  const menuListLinks = document.querySelectorAll('.menu__list-link');
  const ACTIVE_CLASSNAMES = {
    btn: 'menu__btn--active',
    list: 'menu__list--active',
  };
  const toggleBtnClass = () => {
    menuBtn.classList.toggle(ACTIVE_CLASSNAMES.btn);
    menuList.classList.toggle(ACTIVE_CLASSNAMES.list);
  };

  const removeBtnClass = () => {
    menuBtn.classList.remove(ACTIVE_CLASSNAMES.btn);
    menuList.classList.remove(ACTIVE_CLASSNAMES.list);
  };

  menuListLinks.forEach((link) => {
    link.addEventListener('click', removeBtnClass);
  });

  menuBtn.addEventListener('click', toggleBtnClass);
})();
