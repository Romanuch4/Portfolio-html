(function () {
  const btnArr = document.querySelectorAll('.questions__item-title');
  const ACTIVE_CLASSNAME = 'questions__item--active';
  const keyCodes = {
    enter: 13,
  };
  const showCloseText = (evt) => {
    btnArr.forEach((item) => item.parentNode.classList.remove(ACTIVE_CLASSNAME));
    evt.target.parentNode.classList.toggle(ACTIVE_CLASSNAME);
  };

  const showCloseTextKeyDown = (evt) => {
    if (evt.keyCode === keyCodes.enter) {
      showCloseText(evt);
    }
  };

  btnArr.forEach((item) => {
    item.addEventListener('click', showCloseText);
    item.addEventListener('keydown', showCloseTextKeyDown);
  });
})();
