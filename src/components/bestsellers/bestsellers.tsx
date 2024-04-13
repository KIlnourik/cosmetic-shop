import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Bestsellers(): JSX.Element {
  return (
    <section className="main__block best-sellers">
    <div className="best-sellers__text">
      <h2 className="best-sellers__title">Бестселлеры</h2>
      <p className="best-sellers__description">Легендарные продукты, завоевавшие любовь наших клиентов</p>
      <Link className="best-sellers__link button" to={AppRoute.Catalog} aria-label="Смотреть все">
        Смотреть все
      </Link>
    </div>
    <div className="best-sellers__slider slider swiper-container">
      <div className="swiper-wrapper slider__wrapper">
        <div className="swiper-slide slider__item product-card">
          <picture>
            <source type="image/webp" srcSet="img/cream-high@1x.webp 1x, img/cream-high@2x.webp 2x" />
            <source type="image/jpeg" srcSet="img/cream-high@1x.jpg 1x, img/cream-high@2x.jpg 2x" />
            <img
              className="product-card__image" src="img/cream-high@1x.jpg" alt="High - крем для лица" height="312" width="230" />
          </picture>
          <h3 className="product-card__title">High</h3>
          <p className="product-card__description">крем для лица</p>
          <Link className="product-card__link" to="#" aria-label="Подробнее">Подробнее</Link>
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
  )
}

export default Bestsellers;
