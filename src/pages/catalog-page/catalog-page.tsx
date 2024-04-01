import { Helmet } from "react-helmet-async";

function CatalogPage(): JSX.Element {
  return (
    <>
    <Helmet>
      Maroon: Каталог
    </Helmet>
      <main className="main main_top-spaced catalog-main">
        <section className="catalog">
          <div className="catalog-head">
            <div className="catalog-head__top">
              <div className="catalog-head__wrapper wrapper">
                <h1 className="catalog-head__title">Каталог</h1>
                <button className="catalog-head__button-close" aria-label="Закрыть фильтр" type="button"></button>
                <button className="catalog-head__button-open" type="button">Фильтр</button>
              </div>
            </div>
            <div className="catalog-head__filter">
              <div className="wrapper">
                <form className="filter" action="https://echo.htmlacademy.ru" method="GET">
                  <div className="filter__inner">
                    <div className="filter__block accordion filter__block_face-care">
                      <div className="filter__block-head">
                        <div className="filter__subtitle">Уход для лица</div>
                        <button className="filter__accordion-btn accordion__toggler" type="button" aria-label="Раскрыть фильтр"><span className="accordion__toggler-icon"></span></button>
                      </div>
                      <div className="accordion__content">
                        <ul className="filter__list accordion__inner">
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-face-care-0" name="face-care" value="cream" checked />
                            <label className="filter__checkbox-label" htmlFor="filter-face-care-0">Крема</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-face-care-1" name="face-care" value="serum" checked />
                            <label className="filter__checkbox-label" htmlFor="filter-face-care-1">Сыворотки</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-face-care-2" name="face-care" value="mask" checked />
                            <label className="filter__checkbox-label" htmlFor="filter-face-care-2">Маски</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-face-care-3" name="face-care" value="foam" />
                            <label className="filter__checkbox-label" htmlFor="filter-face-care-3">Пенки</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-face-care-4" name="face-care" value="tonic" />
                            <label className="filter__checkbox-label" htmlFor="filter-face-care-4">Тоники</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-face-care-5" name="face-care" value="powder" checked />
                            <label className="filter__checkbox-label" htmlFor="filter-face-care-5">Пудры</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="filter__block accordion filter__block_body-care">
                      <div className="filter__block-head">
                        <div className="filter__subtitle">Уход для тела</div>
                        <button className="filter__accordion-btn accordion__toggler" type="button" aria-label="Раскрыть фильтр"><span className="accordion__toggler-icon"></span></button>
                      </div>
                      <div className="accordion__content">
                        <ul className="filter__list accordion__inner">
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-body-care-0" name="body-care" value="cream" />
                            <label className="filter__checkbox-label" htmlFor="filter-body-care-0">Крема</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-body-care-1" name="body-care" value="oil" checked />
                            <label className="filter__checkbox-label" htmlFor="filter-body-care-1">Масла</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-body-care-2" name="body-care" value="scrub" />
                            <label className="filter__checkbox-label" htmlFor="filter-body-care-2">Скрабы</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-body-care-3" name="body-care" value="soap" checked />
                            <label className="filter__checkbox-label" htmlFor="filter-body-care-3">Мыло</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-body-care-4" name="body-care" value="bomb" checked />
                            <label className="filter__checkbox-label" htmlFor="filter-body-care-4">Бомбочки для ванны</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-body-care-5" name="body-care" value="salt" />
                            <label className="filter__checkbox-label" htmlFor="filter-body-care-5">Соль для ванны</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="filter__block accordion filter__block_skin-type">
                      <div className="filter__block-head">
                        <div className="filter__subtitle">Тип кожи</div>
                        <button className="filter__accordion-btn accordion__toggler" type="button" aria-label="Раскрыть фильтр"><span className="accordion__toggler-icon"></span></button>
                      </div>
                      <div className="accordion__content">
                        <ul className="filter__list accordion__inner">
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-skin-type-0" name="skin-type" value="normal" />
                            <label className="filter__checkbox-label" htmlFor="filter-skin-type-0">Нормальная</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-skin-type-1" name="skin-type" value="dry" checked />
                            <label className="filter__checkbox-label" htmlFor="filter-skin-type-1">Сухая</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-skin-type-2" name="skin-type" value="oily" />
                            <label className="filter__checkbox-label" htmlFor="filter-skin-type-2">Жирная</label>
                          </li>
                          <li className="filter__item">
                            <input className="visually-hidden" type="checkbox" id="filter-skin-type-3" name="skin-type" value="combined" checked />
                            <label className="filter__checkbox-label" htmlFor="filter-skin-type-3">Комбинированная</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="filter__buttons">
                      <button className="filter__button" id="filter-submit" type="submit">Применить</button>
                      <button className="filter__button" id="filter-reset" type="reset">Сбросить</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="catalog__wrapper wrapper">
            <ul className="catalog__list">
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/high@1x.webp 1x, img/catalog/high@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/high@1x.jpg 1x, img/catalog/high@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/high-lap@1x.webp 1x, img/catalog/high-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/high-lap@1x.jpg 1x, img/catalog/high-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/high-mob@1x.webp 1x, img/catalog/high-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/high-mob@1x.jpg 1x, img/catalog/high-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/high@1x.jpg" width="270" height="350" alt="High - крем для лица" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">High</h3><span className="product__price">990 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">крем для лица</div>
                    <div className="product__description">50ml</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/rest@1x.webp 1x, img/catalog/rest@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/rest@1x.jpg 1x, img/catalog/rest@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/rest-lap@1x.webp 1x, img/catalog/rest-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/rest-lap@1x.jpg 1x, img/catalog/rest-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/rest-mob@1x.webp 1x, img/catalog/rest-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/rest-mob@1x.jpg 1x, img/catalog/rest-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/rest@1x.jpg" width="270" height="350"
                    alt="Rest - минеральная пудра" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Rest</h3><span className="product__price">690 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">минеральная пудра</div>
                    <div className="product__description">20g</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="card.html">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/rose@1x.webp 1x, img/catalog/rose@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/rose@1x.jpg 1x, img/catalog/rose@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/rose-lap@1x.webp 1x, img/catalog/rose-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/rose-lap@1x.jpg 1x, img/catalog/rose-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/rose-mob@1x.webp 1x, img/catalog/rose-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/rose-mob@1x.jpg 1x, img/catalog/rose-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/rose@1x.jpg" width="270" height="350"
                    alt="Rose - крем для лица" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Rose</h3><span className="product__price">890 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">крем для лица</div>
                    <div className="product__description">50ml</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/milk@1x.webp 1x, img/catalog/milk@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/milk@1x.jpg 1x, img/catalog/milk@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/milk-lap@1x.webp 1x, img/catalog/milk-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/milk-lap@1x.jpg 1x, img/catalog/milk-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/milk-mob@1x.webp 1x, img/catalog/milk-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/milk-mob@1x.jpg 1x, img/catalog/milk-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/milk@1x.jpg" width="270" height="350"
                    alt="Milk - масло для тела" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Milk</h3><span className="product__price">790 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">масло для тела</div>
                    <div className="product__description">150ml</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/paradise@1x.webp 1x, img/catalog/paradise@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/paradise@1x.jpg 1x, img/catalog/paradise@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/paradise-lap@1x.webp 1x, img/catalog/paradise-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/paradise-lap@1x.jpg 1x, img/catalog/paradise-lap@2x.jpg 2x" />
                  <source type="image/webp"
                    srcSet="img/catalog/paradise-mob@1x.webp 1x, img/catalog/paradise-mob@2x.webp 2x" />
                  <source type="image/jpeg"
                    srcSet="img/catalog/paradise-mob@1x.jpg 1x, img/catalog/paradise-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/paradise@1x.jpg" width="270" height="350"
                    alt="Paradise - минеральная пудра" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Paradise</h3><span className="product__price">590 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">минеральная пудра</div>
                    <div className="product__description">15g</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/sun@1x.webp 1x, img/catalog/sun@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/sun@1x.jpg 1x, img/catalog/sun@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/sun-lap@1x.webp 1x, img/catalog/sun-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/sun-lap@1x.jpg 1x, img/catalog/sun-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/sun-mob@1x.webp 1x, img/catalog/sun-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/sun-mob@1x.jpg 1x, img/catalog/sun-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/sun@1x.jpg" width="270" height="350"
                    alt="Sun - бомбочка для ванны" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Sun</h3><span className="product__price">90 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">бомбочка для ванны</div>
                    <div className="product__description">20g</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/violet@1x.webp 1x, img/catalog/violet@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/violet@1x.jpg 1x, img/catalog/violet@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/violet-lap@1x.webp 1x, img/catalog/violet-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/violet-lap@1x.jpg 1x, img/catalog/violet-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/violet-mob@1x.webp 1x, img/catalog/violet-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/violet-mob@1x.jpg 1x, img/catalog/violet-mob@2x.jpg 2x" />
                  <img className="product__image" src="img/catalog/violet@1x.jpg" width="270" height="350"
                    alt="Violet - крем для лица" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Violet</h3><span className="product__price">890 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">крем для лица</div>
                    <div className="product__description">50ml</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/clean@1x.webp 1x, img/catalog/clean@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/clean@1x.jpg 1x, img/catalog/clean@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/clean-lap@1x.webp 1x, img/catalog/clean-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/clean-lap@1x.jpg 1x, img/catalog/clean-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/clean-mob@1x.webp 1x, img/catalog/clean-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/clean-mob@1x.jpg 1x, img/catalog/clean-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/clean@1x.jpg" width="270" height="350"
                    alt="Clean - маска для лица" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Clean</h3><span className="product__price">490 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">маска для лица</div>
                    <div className="product__description">100g</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/coconut@1x.webp 1x, img/catalog/coconut@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/coconut@1x.jpg 1x, img/catalog/coconut@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/coconut-lap@1x.webp 1x, img/catalog/coconut-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/coconut-lap@1x.jpg 1x, img/catalog/coconut-lap@2x.jpg 2x" />
                  <source type="image/webp"
                    srcSet="img/catalog/coconut-mob@1x.webp 1x, img/catalog/coconut-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/coconut-mob@1x.jpg 1x, img/catalog/coconut-mob@2x.jpg 2x" />
                  <img className="product__image" src="img/catalog/coconut@1x.jpg" width="270" height="350"
                    alt="Coconut - масло для тела" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Coconut</h3><span className="product__price">990 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">масло для тела</div>
                    <div className="product__description">300ml</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/lavender@1x.webp 1x, img/catalog/lavender@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/lavender@1x.jpg 1x, img/catalog/lavender@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/lavender-lap@1x.webp 1x, img/catalog/lavender-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/lavender-lap@1x.jpg 1x, img/catalog/lavender-lap@2x.jpg 2x" />
                  <source type="image/webp"
                    srcSet="img/catalog/lavender-mob@1x.webp 1x, img/catalog/lavender-mob@2x.webp 2x" />
                  <source type="image/jpeg"
                    srcSet="img/catalog/lavender-mob@1x.jpg 1x, img/catalog/lavender-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/lavender@1x.jpg" width="270" height="350"
                    alt="Lavender - мыло ручной работы" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Lavender</h3><span className="product__price">290 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">мыло ручной работы</div>
                    <div className="product__description">50g</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/lotos@1x.webp 1x, img/catalog/lotos@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/lotos@1x.jpg 1x, img/catalog/lotos@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/lotos-lap@1x.webp 1x, img/catalog/lotos-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/lotos-lap@1x.jpg 1x, img/catalog/lotos-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/lotos-mob@1x.webp 1x, img/catalog/lotos-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/lotos-mob@1x.jpg 1x, img/catalog/lotos-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/lotos@1x.jpg" width="270" height="350"
                    alt="Lotos - маска для лица" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Lotos</h3><span className="product__price">890 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">маска для лица</div>
                    <div className="product__description">50ml</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/earth@1x.webp 1x, img/catalog/earth@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/earth@1x.jpg 1x, img/catalog/earth@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/earth-lap@1x.webp 1x, img/catalog/earth-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/earth-lap@1x.jpg 1x, img/catalog/earth-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/earth-mob@1x.webp 1x, img/catalog/earth-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/earth-mob@1x.jpg 1x, img/catalog/earth-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/earth@1x.jpg" width="270" height="350"
                    alt="Earth - маска для лица" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Earth</h3><span className="product__price">90 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">бомбочка для ванны</div>
                    <div className="product__description">20g</div>
                  </div>
                </div>
              </a></li>
            </ul>
            <div className="pagination">
              <div className="pagination__numbers"><span className="pagination__number"><a
                className="pagination__number-link pagination__number-link_current" href="#"
                aria-label="Первая страница">1</a></span><span className="pagination__number"><a
                  className="pagination__number-link" href="#" aria-label="Восьмая страница (последняя)">8</a></span></div>
              <div className="pagination__arrows"><a className="pagination__arrow" href="#" aria-label="Предыдущая страница">
                <svg className="slider-icon" height="12" width="26">
                  <use xlinkHref="#arrow-left"></use>
                </svg></a><a className="pagination__arrow" href="#" aria-label="Следующая страница">
                  <svg className="slider-icon" height="12" width="26">
                    <use xlinkHref="#main-arrow"></use>
                  </svg></a></div>
            </div>
          </div>
        </section>
        <section className="catalog-history">
          <div className="catalog-history__wrapper">
            <h2>Вы недавно смотрели</h2>
            <ul className="catalog-history__list">
              <li className="catalog-history__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/clean@1x.webp 1x, img/catalog/clean@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/clean@1x.jpg 1x, img/catalog/clean@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/clean-lap@1x.webp 1x, img/catalog/clean-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/clean-lap@1x.jpg 1x, img/catalog/clean-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/clean-mob@1x.webp 1x, img/catalog/clean-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/clean-mob@1x.jpg 1x, img/catalog/clean-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/clean@1x.jpg" width="270" height="350"
                    alt="Clean - маска для лица" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Clean</h3><span className="product__price">490 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">маска для лица</div>
                    <div className="product__description">100g</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog-history__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/lotos@1x.webp 1x, img/catalog/lotos@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/lotos@1x.jpg 1x, img/catalog/lotos@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/lotos-lap@1x.webp 1x, img/catalog/lotos-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/lotos-lap@1x.jpg 1x, img/catalog/lotos-lap@2x.jpg 2x" />
                  <source type="image/webp" srcSet="img/catalog/lotos-mob@1x.webp 1x, img/catalog/lotos-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/lotos-mob@1x.jpg 1x, img/catalog/lotos-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/lotos@1x.jpg" width="270" height="350"
                    alt="Lotos - маска для лица" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Lotos</h3><span className="product__price">890 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">маска для лица</div>
                    <div className="product__description">50ml</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog-history__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/lavender@1x.webp 1x, img/catalog/lavender@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/lavender@1x.jpg 1x, img/catalog/lavender@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/lavender-lap@1x.webp 1x, img/catalog/lavender-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/lavender-lap@1x.jpg 1x, img/catalog/lavender-lap@2x.jpg 2x" />
                  <source type="image/webp"
                    srcSet="img/catalog/lavender-mob@1x.webp 1x, img/catalog/lavender-mob@2x.webp 2x" />
                  <source type="image/jpeg"
                    srcSet="img/catalog/lavender-mob@1x.jpg 1x, img/catalog/lavender-mob@2x.jpg 2x" /><img
                    className="product__image" src="img/catalog/lavender@1x.jpg" width="270" height="350"
                    alt="Lavender - мыло ручной работы" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Lavender</h3><span className="product__price">290 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">мыло ручной работы</div>
                    <div className="product__description">50g</div>
                  </div>
                </div>
              </a></li>
              <li className="catalog-history__item product"><a className="product__link" href="#">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                    srcSet="img/catalog/coconut@1x.webp 1x, img/catalog/coconut@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 1200px)"
                    srcSet="img/catalog/coconut@1x.jpg 1x, img/catalog/coconut@2x.jpg 2x" />
                  <source type="image/webp" media="(min-width: 768px)"
                    srcSet="img/catalog/coconut-lap@1x.webp 1x, img/catalog/coconut-lap@2x.webp 2x" />
                  <source type="image/jpeg" media="(min-width: 768px)"
                    srcSet="img/catalog/coconut-lap@1x.jpg 1x, img/catalog/coconut-lap@2x.jpg 2x" />
                  <source type="image/webp"
                    srcSet="img/catalog/coconut-mob@1x.webp 1x, img/catalog/coconut-mob@2x.webp 2x" />
                  <source type="image/jpeg" srcSet="img/catalog/coconut-mob@1x.jpg 1x, img/catalog/coconut-mob@2x.jpg 2x" />
                  <img className="product__image" src="img/catalog/coconut@1x.jpg" width="270" height="350"
                    alt="Coconut - масло для тела" />
                </picture>
                <div className="product__wrapper">
                  <div className="product__text">
                    <h3 className="product__title">Coconut</h3><span className="product__price">990 ₽</span>
                  </div>
                  <div className="product__text">
                    <div className="product__description">масло для тела</div>
                    <div className="product__description">300ml</div>
                  </div>
                </div>
              </a></li>
            </ul>
            <div className="pagination">
              <div className="pagination__numbers"><span className="pagination__number"><a className="pagination__number-link pagination__number-link_current" href="#" aria-label="Первая страница">1</a></span><span className="pagination__number"><a className="pagination__number-link" href="#" aria-label="Третья страница (последняя)">3</a></span></div>
              <div className="pagination__arrows"><a className="pagination__arrow" href="#" aria-label="Предыдущая страница">
                <svg className="slider-icon" height="12" width="26">
                  <use xlinkHref="#arrow-left"></use>
                </svg></a><a className="pagination__arrow" href="#" aria-label="Следующая страница">
                  <svg className="slider-icon" height="12" width="26">
                    <use xlinkHref="#main-arrow"></use>
                  </svg></a></div>
            </div>
          </div>
        </section>
        <section className="main__block follow">
          <div className="follow__container">
            <div className="follow__image-wrapper">
              <picture>
                <source type="image/webp" srcSet="img/join1@1x.webp 1x, img/join1@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join1@1x.jpg 1x, img/join1@2x.jpg 2x" /><img className="follow__image"
                  src="img/join1@1x.jpg" alt="Присоединяйтесь к нам" height="233" width="233" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="img/join2@1x.webp 1x, img/join2@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join2@1x.jpg 1x, img/join2@2x.jpg 2x" /><img className="follow__image"
                  src="img/join2@1x.jpg" alt="Присоединяйтесь к нам" height="233" width="233" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="img/join3@1x.webp 1x, img/join3@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join3@1x.jpg 1x, img/join3@2x.jpg 2x" /><img className="follow__image"
                  src="img/join3@1x.jpg" alt="Присоединяйтесь к нам" height="233" width="233" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="img/join4@1x.webp 1x, img/join4@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join4@1x.jpg 1x, img/join4@2x.jpg 2x" /><img className="follow__image"
                  src="img/join4@1x.jpg" alt="Присоединяйтесь к нам" height="700" width="233" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="img/join5@1x.webp 1x, img/join5@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join5@1x.jpg 1x, img/join5@2x.jpg 2x" /><img className="follow__image"
                  src="img/join5@1x.jpg" alt="Присоединяйтесь к нам" height="233" width="233" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="img/join6@1x.webp 1x, img/join6@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/join6@1x.jpg 1x, img/join6@2x.jpg 2x" /><img className="follow__image"
                  src="img/join6@1x.jpg" alt="Присоединяйтесь к нам" height="233" width="233" />
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
                  <h3>Телефон</h3><a className="contacts__link" href="tel:+79238889060" aria-label="Телефон">+7 (923) 888-90-60</a>
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

export default CatalogPage;
