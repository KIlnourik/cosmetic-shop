import SocialList from '../social-list/social-list';


function Contacts(): JSX.Element {
  return (
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
  );
}

export default Contacts;
