import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo/logo';


function Header(): JSX.Element {
  const header = document.querySelector(`.header`);
  const menu = document.querySelector(`.navigation`);
  const button = document.querySelector(`.header__menu-button`);
  const overlay = document.querySelector(`.navigation__overlay`);

  const isScrolled = (): boolean => {
    const pxAmount = 0;
    const scrollTop = document.documentElement.scrollTop;

    return scrollTop > pxAmount;
  };

  const setMenuHeight = (): void => {
    if (menu && header) {
      menu.removeAttribute(`style`);

      const deltaHeight = document.body.offsetHeight - header.offsetHeight;
      const menuHeight = menu.offsetHeight;

      if (deltaHeight < menuHeight) {
        menu.setAttribute(`style`, `height: ${deltaHeight}px`);
      }
    }
  }

  const onEscPress = (evt: KeyboardEvent): void => {
    if (evt.code === '27') {
      closeHeaderMenu();
    }
  }

  const openHeaderMenu = (): void => {
    if (button && overlay && header && menu) {
      button.removeEventListener(`click`, openHeaderMenu);
      button.addEventListener(`click`, closeHeaderMenu);
      overlay.addEventListener(`click`, closeHeaderMenu);

      document.addEventListener(`keydown`, onEscPress);

      document.body.classList.add(`no-scroll`);
      header.classList.add(`header_colored`);
      menu.classList.add(`navigation_open`);
      button.classList.add(`header__menu-button_active`);

      setMenuHeight();
    }
  }

  const closeHeaderMenu = (): void => {
    if (button && overlay && header && menu) {
      button.removeEventListener(`click`, closeHeaderMenu);
      button.addEventListener(`click`, openHeaderMenu);
      overlay.removeEventListener(`click`, closeHeaderMenu);

      document.removeEventListener(`keydown`, onEscPress);

      document.body.classList.remove(`no-scroll`);
      if (!isScrolled()) {
        header.classList.remove(`header_colored`);
      }
      menu.classList.remove(`navigation_open`);
      button.classList.remove(`header__menu-button_active`);
    }
  };

  if (menu && header) {
    window.addEventListener(`scroll`, () => {
      if (isScrolled()) {
        header.classList.add(`header_colored`);
      } else {
        header.classList.remove(`header_colored`);
      }
    });
    closeHeaderMenu();
  }

  return (
    <header className="header header_transparent">
      <button className="header__menu-button" aria-label="Меню"></button>
      <Logo />
      <nav className="header__navigation navigation">
        <div className="navigation__overlay"></div>
        <div className="navigation__content">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link className="navigation__link" to={AppRoute.Catalog}>Каталог</Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="#">О нас</Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="#">Контакты</Link>
            </li>
          </ul>
          <ul className="navigation__contacts social social_for-menu">
            <li className="social__item social__item_minor-spaced">
              <a className="social__link" href="#" aria-label="Facebook">
                <svg height="18" width="11">
                  <use xlinkHref="#facebook-icon"></use>
                </svg>
              </a>
            </li>
            <li className="social__item social__item_minor-spaced">
              <a className="social__link" href="#" aria-label="Instagram">
                <svg height="20" width="20">
                  <use xlinkHref="#instagram-icon"></use>
                </svg>
              </a>
            </li>
            <li className="social__item social__item_minor-spaced">
              <a className="social__link" href="#" aria-label="Twitter">
                <svg height="17" width="20">
                  <use xlinkHref="#twitter-icon"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="header__actions user-actions">
        <li className="user-actions__item">
          <a className="user-actions__link user-actions__user" href="#"
            aria-label="Пользователь">
            <svg height="21" width="16">
              <use xlinkHref="#user-icon"></use>
            </svg>
          </a>
        </li>
        <li className="user-actions__item">
          <a className="user-actions__link user-actions__cart" href="#" aria-label="Корзина">
            <svg height="21" width="18">
              <use xlinkHref="#cart-icon"></use>
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
