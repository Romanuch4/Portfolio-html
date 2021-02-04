(function () {
  const preloader = document.querySelector('.preloader'),
    HIDDEN_CLASSNAME = 'hidden',
    BODY_OVERFLOW_CLASSNAME = 'overflow';
  const hidePreloader = () => {
    preloader.classList.add(HIDDEN_CLASSNAME);
    document.body.classList.remove(BODY_OVERFLOW_CLASSNAME);
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  };
  window.addEventListener('load', hidePreloader);
  if (document.readyState === 'complete') {
    window.removeEventListener('load', hidePreloader);
  }
})();
