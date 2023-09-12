import Bestsellers from '../../blocks/bestsellers/bestsellers';
import Intro from '../../blocks/intro/intro';
import SocialList from '../../blocks/social-list/social-list';


function MainScreen(): JSX.Element {
  return (
    <main className="page-main main">
      <Intro />
      <Bestsellers />

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
        <SocialList />
        <div className="contacts__map-wrapper"></div>
      </section>

    </main>
  );
}

export default MainScreen;
