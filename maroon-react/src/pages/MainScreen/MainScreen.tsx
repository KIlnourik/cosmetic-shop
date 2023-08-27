

function MainScreen(): JSX.Element {
  return (
    <main className="page-main main">
      <section className="intro">
        <h1 className="intro__title">Maroon</h1>
        <p className="intro__slogan">Натуральная косметика для бережного ухода за кожей</p>
        <button className="intro__button button">Подробнее</button>
        <div className="intro__categories categories">
          <ul className="categories__list">
            <li className="categories__item">
              <img src="./img/mobile/main1-mob@1x.jpg" alt="" className="categories__image" />
              <p className="categories__title">Уход для лица</p>
              <a href="" className="categories__link">
                <svg>
                  <use xlinkHref="./img/sprite.svg#main-arrow"></use>
                </svg>
              </a>
            </li>
            <li className="categories__item">
              <img src="./img/mobile/main2-mob@1x.jpg" alt="" className="categories__image" />
              <p className="categories__title">Уход для тела</p>
              <a href="" className="categories__link">
                <svg>
                  <use xlinkHref="./img/sprite.svg#main-arrow"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="bestsellers">
        <h2 className="bestsellers__title">Бестселлер</h2>
        <p className="bestsellers__slogan">Легендарные продукты, завоевавшие любовь наших клиентов</p>
        <a href="" className="besstellers__button button">Смотреть все</a>

        <div className="slider">
          <ul className="slider__list">
            <li className="slider__item bestsellers">
              <div className="bestsellers__card">
                <h3 className="bestsellers__card-title">High</h3>
                <p className="bestsellers__card-desc">крем для лица</p>
                <a href="" className="bestsellers__card-link">Подробнее</a>
              </div>
            </li>
          </ul>

          <div className="slider__controls">
            <button className="slider__btn slider__btn--prev">
              <svg>
              </svg>
            </button>
            <button className="slider__btn slider__btn--next">
            </button>
          </div>
        </div>

      </section>

      <section className="promo">
        <h2 className="promo__title">Встречайте весну вместе с нами</h2>
        <p className="promo__title">Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой</p>
        <a href="" className="promo__button button">Подробнее</a>
      </section>

      <section className="care-form">
        <h2 className="care-form__title">Индивидуальный уход</h2>
        <p className="care-form__desc">Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ
          жизни,место жительства и другие факторы.
        </p>
        <a href="" className="care-form__button button">Заполнить анкету</a>
        <img src="./img/mobile/care-mob@1x.jpg" alt="" className="care-form__img" />
      </section>

      <section className="about">
        <h2 className="about__title visually-hidden">Наша история</h2>
        <p className="about__desc">“Мы стремимся сделать уход за кожей доступным и приятным ритуалом для всех, кто хочет
          заботиться о себе и своем теле”
        </p>
        <a href="" className="about__button button">Наша история</a>
      </section>

      <section className="subscribe">
        <h2 className="subscribe__title">Присоединяйтесь к нам</h2>
        <p className="subscribe__slogan">Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми</p>
        <button className="subscribe__btn">Подписаться</button>
        <ul className="subscribe__image-list">
          <li className="subscribe__image-item">
            <img src="" alt="" className="subscribe__image" />
          </li>
          <li className="subscribe__image-item">
            <img src="" alt="" className="subscribe__image" />
          </li>
          <li className="subscribe__image-item">
            <img src="" alt="" className="subscribe__image" />
          </li>
          <li className="subscribe__image-item">
            <img src="" alt="" className="subscribe__image" />
          </li>
          <li className="subscribe__image-item">
            <img src="" alt="" className="subscribe__image" />
          </li>
          <li className="subscribe__image-item">
            <img src="" alt="" className="subscribe__image" />
          </li>
        </ul>
      </section>

      <section className="contacts">
        <h2 className="contacts__title">Контакты</h2>
        <ul className="contacts__list">
          <li className="contacts__item">
            <h3 className="contacts__title">Адрес</h3>
            <p className="contacts__desc">
              Санкт-Петербург,ул. Большая Конюшенная, 19
            </p>
          </li>
          <li className="contacts__item">
            <h3 className="contacts__title">Телефон</h3>
            <p className="contacts__desc">+7 (923) 888-90-60</p>
          </li>
          <li className="contacts__item">
            <h3 className="contacts__title">E-mail</h3>
            <p className="contacts__desc">info@maroon.ru</p>
          </li>
        </ul>
        <ul className="social">
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
        <div className="contacts__map-wrapper"></div>
      </section>

    </main>
  );
}

export default MainScreen;
