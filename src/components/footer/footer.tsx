import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import Logo from "../logo/logo";

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-inner wrapper">
          <Logo />
          <ul className="footer__list">
            <li className="footer__item"><Link className="footer__link" to={AppRoute.Catalog}>Каталог</Link></li>
            <li className="footer__item"><Link className="footer__link" to={'#'}>О нас</Link></li>
            <li className="footer__item"><Link className="footer__link" to={'#'}>Магазины</Link></li>
            <li className="footer__item"><Link className="footer__link" to={'#'}>Контакты</Link></li>
          </ul>
          <ul className="social-list">
            <li className="social-item"><Link to={"https://www.facebook.com/"} aria-label="Facebook">
              <svg height="18" width="11">
                <use xlinkHref="#facebook-icon"></use>
              </svg></Link></li>
            <li className="social-item"><Link to={"https://www.instagram.com/"} aria-label="Instagram">
              <svg height="20" width="20">
                <use xlinkHref="#instagram-icon"></use>
              </svg></Link></li>
            <li className="social-item"><Link to={"https://twitter.com/"} aria-label="Twitter">
              <svg height="17" width="20">
                <use xlinkHref="#twitter-icon"></use>
              </svg></Link></li>
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
  );
}

export default Footer;
