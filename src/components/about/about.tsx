import { Link } from "react-router-dom";

function About(): JSX.Element {
  return (
    <section className="main__block about">
      <div className="about__container">
        <div className="about__content">
          <h1 className="about__title">MAROON</h1>
          <p className="about__description">Натуральная косметика<br />для бережного ухода за кожей</p>
          <a className="about__button button" href="#">Подробнее</a>
        </div>
        <Link className="about__item promo-card" to="#">
          <picture>
            <source type="image/webp" media="(min-width: 1200px)" srcSet="img/main1@1x.webp 1x, img/main1@2x.webp 2x" />
            <source type="image/jpeg" media="(min-width: 1200px)" srcSet="img/main1@1x.jpg 1x, img/main1@2x.jpg 2x" />
            <source type="image/webp" media="(min-width: 768px)"
              srcSet="img/main1-lap@1x.webp 1x, img/main1-lap@2x.webp 2x" />
            <source type="image/jpeg" media="(min-width: 768px)"
              srcSet="img/main1-lap@1x.jpg 1x, img/main1-lap@2x.jpg 2x" />
            <source type="image/webp" srcSet="img/main1-mob@1x.webp 1x, img/main1-mob@2x.webp 2x" />
            <source type="image/jpeg" srcSet="img/main1-mob@1x.jpg 1x, img/main1-mob@2x.jpg 2x" />
            <img
              className="promo-card__image" src="img/main1@1x.jpg" width="330" height="422" alt="Уход для лица" />
          </picture>
          <div className="promo-card__text"><span>Уход для лица</span>
            <svg className="promo-card__icon" height="12" width="26">
              <use xlinkHref="#main-arrow"></use>
            </svg>
          </div>
        </Link>
        <Link className="about__item promo-card" to="#">
          <picture>
            <source type="image/webp" media="(min-width: 1200px)" srcSet="img/main2@1x.webp 1x, img/main2@2x.webp 2x" />
            <source type="image/jpeg" media="(min-width: 1200px)" srcSet="img/main2@1x.jpg 1x, img/main2@2x.jpg 2x" />
            <source type="image/webp" media="(min-width: 768px)"
              srcSet="img/main2-lap@1x.webp 1x, img/main2-lap@2x.webp 2x" />
            <source type="image/jpeg" media="(min-width: 768px)"
              srcSet="img/main2-lap@1x.jpg 1x, img/main2-lap@2x.jpg 2x" />
            <source type="image/webp" srcSet="img/main2-mob@1x.webp 1x, img/main2-mob@2x.webp 2x" />
            <source type="image/jpeg" srcSet="img/main2-mob@1x.jpg 1x, img/main2-mob@2x.jpg 2x" /><img
              className="promo-card__image" src="img/main2@1x.jpg" width="330" height="422" alt="Уход для тела" />
          </picture>
          <div className="promo-card__text"><span>Уход для тела</span>
            <svg className="promo-card__icon" height="12" width="26">
              <use xlinkHref="#main-arrow"></use>
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default About;
