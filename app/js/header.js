(function () {
  const header = document.querySelector('.header');
  const section = document.querySelector('.top');
  const arrowDown = document.querySelector('.scroll__btn__link');
  const logo = document.querySelector('.logo');
  const ACTIVE_CLASSNAME = 'header--scroll';
  const keyCodes = {
    enter: 13,
  };
  const timeForScroll = 800;
  const minScreenSize = 320;
  //  Header на нулевом экране должен быть без
  //background и с padding: 30px 0;
  //При смене экрана header получает класс,
  //который добавляет background и уменьшает отстут.
  //  Так как событие scroll не срабатывает,
  //я написал код, который проверяет, насколько экран просмотра
  //отдален от section.top . Если отдаление меньше нуля, то
  //накидывается класс. setTimeout для того, чтоб вычислить значение уже после скролла,
  //который длится 0.7сек(смотреть fullScroll.animateTime).
  //  Навесил событие на стрелки(переключают экраны)
  //и логотип(возвращает на первый экран).
  const changeHeader = () => {
    setTimeout(() => {
      if (-section.getBoundingClientRect().top > minScreenSize) {
        header.classList.add(ACTIVE_CLASSNAME);
      } else {
        header.classList.remove(ACTIVE_CLASSNAME);
      }
    }, timeForScroll);
  };

  const changeHeaderkeyDown = (evt) => {
    if (evt.keyCode === keyCodes.enter) {
      changeHeader();
    }
  };
  changeHeader();
  window.addEventListener('mousewheel', changeHeader);
  window.addEventListener('keydown', changeHeader);
  arrowDown.addEventListener('click', changeHeader);
  arrowDown.addEventListener('keydown', changeHeaderkeyDown);
  logo.addEventListener('click', changeHeader);
  logo.addEventListener('keydown', changeHeaderkeyDown);
})();
