import { Helmet } from "react-helmet-async";

function MainPage(): JSX.Element {
  return (
    <>
      <Helmet>Maroon</Helmet>
      <main className="main main_no-top-spaced">
        <section className="main__block about">
          <div className="about__container">
            <div className="about__content">
              <h1 className="about__title">MAROON</h1>
              <p className="about__description">Натуральная косметика<br />для бережного ухода за кожей</p><a className="about__button button" href="#">Подробнее</a>
            </div><a className="about__item promo-card" href="#">
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
            </a><a className="about__item promo-card" href="#">
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
            </a>
          </div>
        </section>
        <section className="main__block best-sellers">
          <div className="best-sellers__text">
            <h2 className="best-sellers__title">Бестселлеры</h2>
            <p className="best-sellers__description">Легендарные продукты, завоевавшие любовь наших клиентов</p><a className="best-sellers__link button" href="#" aria-label="Смотреть все">Смотреть все</a>
          </div>
          <div className="best-sellers__slider slider swiper-container">
            <div className="swiper-wrapper slider__wrapper">
              <div className="swiper-slide slider__item product-card">
                <picture>
                  <source type="image/webp" srcSet="img/cream-high@1x.webp 1x, img/cream-high@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/cream-high@1x.jpg 1x, img/cream-high@2x.jpg 2x" /><img
                    className="product-card__image" src="img/cream-high@1x.jpg" alt="High - крем для лица" height="312" width="230" />
                </picture>
                <h3 className="product-card__title">High</h3>
                <p className="product-card__description">крем для лица</p><a className="product-card__link" href="#" aria-label="Подробнее">Подробнее</a>
              </div>
              <div className="swiper-slide slider__item product-card">
                <picture>
                  <source type="image/webp" srcSet="img/cream-rest@1x.webp 1x, img/cream-rest@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/cream-rest@1x.jpg 1x, img/cream-rest@2x.jpg 2x" /><img
                    className="product-card__image" src="img/cream-rest@1x.jpg" alt="Rest - минеральная пудра" height="312"
                    width="230" />
                </picture>
                <h3 className="product-card__title">Rest</h3>
                <p className="product-card__description">минеральная пудра</p><a className="product-card__link" href="#"
                  aria-label="Подробнее">Подробнее</a>
              </div>
              <div className="swiper-slide slider__item product-card">
                <picture>
                  <source type="image/webp" srcSet="img/cream-rose@1x.webp 1x, img/cream-rose@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/cream-rose@1x.jpg 1x, img/cream-rose@2x.jpg 2x" /><img
                    className="product-card__image" src="img/cream-rose@1x.jpg" alt="Rose - крем для лица" height="312"
                    width="230" />
                </picture>
                <h3 className="product-card__title">Rose</h3>
                <p className="product-card__description">крем для лица</p><a className="product-card__link" href="card.html"
                  aria-label="Подробнее">Подробнее</a>
              </div>
              <div className="swiper-slide slider__item product-card">
                <picture>
                  <source type="image/webp" srcSet="img/cream-milk@1x.webp 1x, img/cream-milk@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/cream-milk@1x.jpg 1x, img/cream-milk@2x.jpg 2x" /><img
                    className="product-card__image" src="img/cream-milk@1x.jpg" alt="Milk - масло для тела" height="312"
                    width="230" />
                </picture>
                <h3 className="product-card__title">Milk</h3>
                <p className="product-card__description">масло для тела</p><a className="product-card__link" href="#"
                  aria-label="Подробнее">Подробнее</a>
              </div>
            </div>
            <div className="slider__button-container">
              <div className="slider__button slider__button_prev">
                <svg className="slider-icon" height="12" width="26">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </div>
              <div className="slider__button slider__button_next">
                <svg className="slider-icon" height="12" width="26">
                  <use xlinkHref="#main-arrow"></use>
                </svg>
              </div>
            </div>
          </div><a className="best-sellers__link best-sellers__link_mobile button" href="#" aria-label="Смотреть все">Смотреть все</a>
        </section>
        <section className="main__block banner">
          <div className="banner__content">
            <h2 className="banner__title">Встречайте весну вместе с нами</h2>
            <p className="banner__description">Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой</p><a className="banner__link button" href="#" aria-label="Подробнее">Подробнее</a>
          </div>
        </section>
        <section className="main__block individual">
          <div className="individual__container">
            <div className="individual__content">
              <h2 className="individual__title">Индивидуальный уход</h2>
              <p className="individual__text individual__text_hidden-mobile">Не всегда очевидно, какие элементы и минералы необходимы коже, а многочисленные эксперименты с разными средствами только ухудшают ее качество.
              </p>
              <p className="individual__text">Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы.</p><a className="individual__link button" href="#" aria-label="Заполнить анкету">Заполнить анкету</a>
            </div>
            <picture>
              <source type="image/webp" media="(max-width: 767px)" srcSet="img/care-mob@1x.webp 1x, img/care-mob@2x.webp 2x" />
              <source type="image/jpeg" media="(max-width: 767px)" srcSet="img/care-mob@1x.jpg 1x, img/care-mob@2x.jpg 2x" />
              <source type="image/webp" media="(max-width: 1199px)" srcSet="img/care-lap@1x.webp 1x, img/care-lap@2x.webp 2x" />
              <source type="image/jpeg" media="(max-width: 1199px)" srcSet="img/care-lap@1x.jpg 1x, img/care-lap@2x.jpg 2x" />
              <source type="image/webp" srcSet="img/care@1x.webp 1x, img/care@2x.webp 2x" /><img className="individual__image" srcSet="img/care@1x.jpg 1x, img/care@2x.jpg 2x" width="451" height="670" alt="Индивидуальный уход" />
            </picture>
          </div>
        </section>
        <section className="main__block history">
          <div className="history__container">
            <h2 className="visually-hidden">О Maroon</h2>
            <p className="history__title">“Мы стремимся сделать уход за кожей доступным и приятным ритуалом для всех, кто хочет заботиться о себе и своем теле”</p><a className="history__link button" href="#" aria-label="Наша история">Наша история</a>
          </div>
        </section>
        <section className="main__block follow">
          <div className="follow__container">
            <div className="follow__image-wrapper">
              <picture>
                <source type="image/webp" srcSet="img/join1@1x.webp 1x, img/join1@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join1@1x.jpg 1x, img/join1@2x.jpg 2x" /><img className="follow__image" src="img/join1@1x.jpg" alt="Присоединяйтесь к нам" height="233" width="233" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="img/join2@1x.webp 1x, img/join2@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join2@1x.jpg 1x, img/join2@2x.jpg 2x" /><img className="follow__image" src="img/join2@1x.jpg" alt="Присоединяйтесь к нам" height="233" width="233" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="img/join3@1x.webp 1x, img/join3@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join3@1x.jpg 1x, img/join3@2x.jpg 2x" /><img className="follow__image" src="img/join3@1x.jpg" alt="Присоединяйтесь к нам" height="233" width="233" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="img/join4@1x.webp 1x, img/join4@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join4@1x.jpg 1x, img/join4@2x.jpg 2x" /><img className="follow__image" src="img/join4@1x.jpg" alt="Присоединяйтесь к нам" height="700" width="233" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="img/join5@1x.webp 1x, img/join5@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join5@1x.jpg 1x, img/join5@2x.jpg 2x" /><img className="follow__image" src="img/join5@1x.jpg" alt="Присоединяйтесь к нам" height="233" width="233" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="img/join6@1x.webp 1x, img/join6@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join6@1x.jpg 1x, img/join6@2x.jpg 2x" /><img className="follow__image" src="img/join6@1x.jpg" alt="Присоединяйтесь к нам" height="233" width="233" />
              </picture>
            </div>
            <div className="follow__content">
              <h2 className="follow__title">Присоединяйтесь к нам</h2>
              <p className="follow__text">Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми</p><a className="follow__link button" href="#" aria-label="Подписаться">Подписаться</a>
            </div>
          </div>
        </section>
        <section className="main__block contacts">
          <div className="contacts__container">
            <div className="contacts__content">
              <h2 className="contacts__title">Контакты</h2>
              <ul className="contacts__list">
                <li className="contacts__item">
                  <h3>Адрес</h3>
                  <p>Санкт-Петербург,</p>
                  <p>ул. Большая Конюшенная, 19</p>
                </li>
                <li className="contacts__item">
                  <h3>Телефон</h3><a className="contacts__link" href="tel:+79238889060" aria-label="Телефон">+7 (923)
                    888-90-60</a>
                </li>
                <li className="contacts__item">
                  <h3>E-mail</h3><a className="contacts__link" href="mailto:info@maroon.ru"
                    aria-label="E-mail">info@maroon.ru</a>
                </li>
              </ul>
              <ul className="contacts__social social">
                <li className="social__item"><a className="social__link" href="#" aria-label="Facebook">
                  <svg height="18" width="11">
                    <use xlinkHref="#facebook-icon"></use>
                  </svg></a></li>
                <li className="social__item"><a className="social__link" href="#" aria-label="Instagram">
                  <svg height="20" width="20">
                    <use xlinkHref="#instagram-icon"></use>
                  </svg></a></li>
                <li className="social__item"><a className="social__link" href="#" aria-label="Twitter">
                  <svg height="17" width="20">
                    <use xlinkHref="#twitter-icon"></use>
                  </svg></a></li>
              </ul>
            </div>
            <div className="contacts__map-wrapper map" id="map" data-center="59.93791367332671,30.32282782142634" data-zoom="17" data-hint-content="" data-balloon-content=""></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default MainPage;
