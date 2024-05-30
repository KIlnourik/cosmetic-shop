import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import Logo from '../../logo/logo';
import { memo, useEffect, useRef } from 'react';
import UserButton from './user-button/user-button';
import CartButton from './cart-button/cart-button';

const Header = memo(function Header(): JSX.Element {
  const headerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const isScrolled = (): boolean => {
    const pxAmount = 0;
    const scrollTop = document.documentElement.scrollTop;
    return scrollTop > pxAmount;
  };

  const setMenuHeight = (): void => {
    if (menuRef.current && headerRef.current) {
      menuRef.current.removeAttribute(`style`);

      const deltaHeight = document.body.offsetHeight - headerRef.current.offsetHeight;
      const menuHeight = menuRef.current.offsetHeight;

      if (deltaHeight < menuHeight) {
        menuRef.current.setAttribute(`style`, `height: ${deltaHeight}px`);
      }
    }
  };

  const openHeaderMenu = (): void => {
    if (buttonRef.current && overlayRef.current && headerRef.current && menuRef.current) {
      buttonRef.current.removeEventListener(`click`, openHeaderMenu);
      buttonRef.current.addEventListener(`click`, closeHeaderMenu);
      overlayRef.current.addEventListener(`click`, closeHeaderMenu);

      document.addEventListener(`keydown`, onEscPress);

      document.body.classList.add(`no-scroll`);
      headerRef.current.classList.add(`header_colored`);
      menuRef.current.classList.add(`navigation_open`);
      buttonRef.current.classList.add(`header__menu-button_active`);

      setMenuHeight();
    }
  };

  const closeHeaderMenu = (): void => {
    if (buttonRef.current && overlayRef.current && headerRef.current && menuRef.current) {
      buttonRef.current.removeEventListener(`click`, closeHeaderMenu);
      buttonRef.current.addEventListener(`click`, openHeaderMenu);
      overlayRef.current.removeEventListener(`click`, closeHeaderMenu);

      document.removeEventListener(`keydown`, onEscPress);

      document.body.classList.remove(`no-scroll`);
      if (!isScrolled()) {
        headerRef.current.classList.remove(`header_colored`);
      }
      menuRef.current.classList.remove(`navigation_open`);
      buttonRef.current.classList.remove(`header__menu-button_active`);
    }
  };

  const onEscPress = (evt: KeyboardEvent): void => {
    if (evt.code === '27') {
      closeHeaderMenu();
    }
  };

  useEffect(() => {
    if (menuRef.current && headerRef.current) {
      window.addEventListener('scroll', () => {
        if (isScrolled()) {
          headerRef.current?.classList.add('header_colored');
        } else {
          headerRef.current?.classList.remove('header_colored');
        }
      });
      closeHeaderMenu();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerRef, menuRef]);

  return (
      <header className="header header_transparent" ref={headerRef}>
        <div className="header__wrapper">
          <button className="header__menu-button" aria-label="Меню" ref={buttonRef}></button>
          <Logo />
          <nav className="header__navigation navigation" ref={menuRef}>
            <div className="navigation__overlay" ref={overlayRef}></div>
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
              <UserButton />
            </li>
            <li className="user-actions__item">
              <CartButton />
            </li>
          </ul>
        </div>
      </header>
  );
})

export default Header;
