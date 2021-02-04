(function () {
  const links = document.querySelectorAll('.menu__list-link');
  const ACTIVE_CLASSNAME = 'active';
  const changeActiveLink = () => {
    links.forEach((link) => {
      link.classList.remove(ACTIVE_CLASSNAME);
      if (link.href === window.location.href) {
        link.classList.add(ACTIVE_CLASSNAME);
      }
    });
  };
  window.addEventListener('hashchange', changeActiveLink);
})();
