import Map from './map/map';

function Contacts(): JSX.Element {
  return (
    <section className='main__block contacts'>
      <div className='contacts__container'>
        <div className='contacts__content'>
          <h2 className='contacts__title'>Контакты</h2>
          <ul className='contacts__list'>
            <li className='contacts__item'>
              <h3>Адрес</h3>
              <p>Санкт-Петербург,</p>
              <p>ул. Большая Конюшенная, 19</p>
            </li>
            <li className='contacts__item'>
              <h3>Телефон</h3>
              <a className='contacts__link' href='tel:+79238889060' aria-label='Телефон'>
                +7 (923) 888-90-60
              </a>
            </li>
            <li className='contacts__item'>
              <h3>E-mail</h3>
              <a className='contacts__link' href='mailto:info@maroon.ru'
                aria-label='E-mail'>
                info@maroon.ru
              </a>
            </li>
          </ul>
          <ul className='contacts__social social'>
            <li className='social__item'>
              <a className='social__link' href='#' aria-label='Facebook'>
                <svg height='18' width='11'>
                  <use xlinkHref='#facebook-icon'></use>
                </svg>
              </a>
            </li>
            <li className='social__item'>
              <a className='social__link' href='#' aria-label='Instagram'>
                <svg height='20' width='20'>
                  <use xlinkHref='#instagram-icon'></use>
                </svg>
              </a>
            </li>
            <li className='social__item'><a className='social__link' href='#' aria-label='Twitter'>
              <svg height='17' width='20'>
                <use xlinkHref='#twitter-icon'></use>
              </svg>
            </a>
            </li>
          </ul>
        </div>
        <Map />
      </div>
    </section>
  );
}

export default Contacts;
