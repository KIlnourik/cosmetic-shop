import { Outlet } from 'react-router-dom';

function Layout(): JSX.Element {
  return (
    <>
      <header className="page-header header">
        <div className="header__logo logo-icon">
          <svg className="header__icon">
            <use xlinkHref="./img/sprite.svg#logo-icon"></use>
          </svg>
        </div>
        <nav className="header__nav nav">
          <ul className="nav__list list">
            <li className="nav__item">
              <a className="nav__link" href="">Каталог</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="">О нас</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="">Контакты</a>
            </li>
          </ul>
          <ul className="nav__social-list social">
            <li className="social__item">
              <a href="" className="social__link">
                <svg className="social__icon">
                  <use xlinkHref="./img/sprite.svg#facebook-icon"></use>
                </svg>
                <span className="social__name visually-hidden">Фейсбук</span>
              </a>
            </li>
            <li className="social__item">
              <a href="" className="social__link">
                <svg className="social__icon">
                  <use xlinkHref="./img/sprite.svg#instagram-icon"></use>
                </svg>
                <span className="social__name visually-hidden">Инстаграм</span>
              </a>
            </li>
            <li className="social__item">
              <a href="" className="social__link">
                <svg className="social__icon">
                  <use xlinkHref="./img/sprite.svg#twitter-icon"></use>
                </svg>
                <span className="social__name visually-hidden">Твиттер</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__icons icons">
          <ul className="icons__list">
            <li className="icons__item">
              <a href="#" className="icons__link">
                <span className="visually-hidden">Авторизация</span>
                <svg className="icons__icon">
                  <use xlinkHref="./img/sprite.svg#user-icon"></use>
                </svg>
              </a>
            </li>
            <li className="icons__item">
              <a href="#" className="icons__link">
                <span className="visually-hidden">Корзина</span>
                <svg className="icons__icon">
                  <use xlinkHref="./img/sprite.svg#cart-icon"></use>
                </svg>
                <span className="icons__cart-count">3 </span>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <Outlet />

      <footer className="page-footer footer">
        <div className="footer__logo">
          <svg className="footer__icon logo-icon">
            <use xlinkHref="./img/sprite.svg#logo-icon"></use>
          </svg>
        </div>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">Каталог</a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">О нас</a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">Магазины</a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">Контакты</a>
            </li>
          </ul>
          <ul className="footer__social-list social">
            <li className="social__item">
              <a href="" className="social__link">
                <svg className="social__icon">
                  <use xlinkHref="./img/sprite.svg#facebook-icon"></use>
                </svg>
                <span className="social__name visually-hidden">Фейсбук</span>
              </a>
            </li>
            <li className="social__item">
              <a href="" className="social__link">
                <svg className="social__icon">
                  <use xlinkHref="./img/sprite.svg#instagram-icon"></use>
                </svg>
                <span className="social__name visually-hidden">Инстаграм</span>
              </a>
            </li>
            <li className="social__item">
              <a href="" className="social__link">
                <svg className="social__icon">
                  <use xlinkHref="./img/sprite.svg#twitter-icon"></use>
                </svg>
                <span className="social__name visually-hidden">Твиттер</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Layout;
