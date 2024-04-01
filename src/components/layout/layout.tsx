import { Link, Outlet } from 'react-router-dom';
import { AppRoute } from '../../const';

function Layout(): JSX.Element {
  return (
    <>
      <header className="header header_transparent">
        <button className="header__menu-button" aria-label="Меню"></button>
        <Link className="logo" to={AppRoute.Root}
          aria-label="Логотип Maroon">
          <svg className="logo__image" height="21" width="131">
            <use xlinkHref="#logo-icon"></use>
          </svg>
        </Link>
        <nav className="header__navigation navigation">
          <div className="navigation__overlay"></div>
          <div className="navigation__content">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link className="navigation__link" to={AppRoute.Catalog}>Каталог</Link>
              </li>
              <li className="navigation__item">
                <a className="navigation__link" href="#">О нас</a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link" href="#">Контакты</a>
              </li>
            </ul>
            <ul className="navigation__contacts social social_for-menu">
              <li className="social__item social__item_minor-spaced"><a className="social__link" href="#" aria-label="Facebook">
                <svg height="18" width="11">
                  <use xlinkHref="#facebook-icon"></use>
                </svg></a></li>
              <li className="social__item social__item_minor-spaced"><a className="social__link" href="#" aria-label="Instagram">
                <svg height="20" width="20">
                  <use xlinkHref="#instagram-icon"></use>
                </svg></a></li>
              <li className="social__item social__item_minor-spaced"><a className="social__link" href="#" aria-label="Twitter">
                <svg height="17" width="20">
                  <use xlinkHref="#twitter-icon"></use>
                </svg></a></li>
            </ul>
          </div>
        </nav>
        <ul className="header__actions user-actions">
          <li className="user-actions__item"><a className="user-actions__link user-actions__user" href="#"
            aria-label="Пользователь">
            <svg height="21" width="16">
              <use xlinkHref="#user-icon"></use>
            </svg></a></li>
          <li className="user-actions__item"><a className="user-actions__link user-actions__cart" href="#" aria-label="Корзина">
            <svg height="21" width="18">
              <use xlinkHref="#cart-icon"></use>
            </svg></a></li>
        </ul>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__content-inner wrapper"><a className="logo" href="index.html" aria-label="Логотип Maroon">
            <svg className="logo__image" height="21" width="131">
              <use xlinkHref="#logo-icon"></use>
            </svg></a>
            <ul className="footer__list">
              <li className="footer__item"><a className="footer__link" href="catalog.html">Каталог</a></li>
              <li className="footer__item"><a className="footer__link" href="#">О нас</a></li>
              <li className="footer__item"><a className="footer__link" href="#">Магазины</a></li>
              <li className="footer__item"><a className="footer__link" href="#">Контакты</a></li>
            </ul>
            <ul className="social-list">
              <li className="social-item"><a href="https://www.facebook.com/" aria-label="Facebook">
                <svg height="18" width="11">
                  <use xlinkHref="#facebook-icon"></use>
                </svg></a></li>
              <li className="social-item"><a href="https://www.instagram.com/" aria-label="Instagram">
                <svg height="20" width="20">
                  <use xlinkHref="#instagram-icon"></use>
                </svg></a></li>
              <li className="social-item"><a href="https://twitter.com/" aria-label="Twitter">
                <svg height="17" width="20">
                  <use xlinkHref="#twitter-icon"></use>
                </svg></a></li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="footer__copyright-inner wrapper">
            <p>Maroon Ⓒ 2020 Все права защищены</p>
            <p><a className="footer__copyright-link" href="#">Политика конфиденциальности</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
