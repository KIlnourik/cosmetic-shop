import { Helmet } from "react-helmet-async";

function ProductPage(): JSX.Element {
  return (
    <>
      <Helmet>
        Maroon: ProductName
      </Helmet>
      <main className="main main_top-spaced">
        <section className="card">
          <div className="card__wrapper">
            <div className="card__image-wrapper">
              <picture>
                <source type="image/webp" media="(min-width: 1200px)" srcSet="img/card@1x.webp 1x, img/card@2x.webp 2x" />
                <source type="image/jpeg" media="(min-width: 1200px)" srcSet="img/card@1x.jpg 1x, img/card@2x.jpg 2x" />
                <source type="image/webp" media="(min-width: 768px)"
                  srcSet="img/card-lap@1x.webp 1x, img/card-lap@2x.webp 2x" />
                <source type="image/jpeg" media="(min-width: 768px)"
                  srcSet="img/card-lap@1x.jpg 1x, img/card-lap@2x.jpg 2x" />
                <source type="image/webp" srcSet="img/card-mob@1x.webp 1x, img/card-mob@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/card-mob@1x.jpg 1x, img/card-mob@2x.jpg 2x" /><img className="card__image" src="img/card@1x.jpg" width="630" height="647" alt="Rose - крем для лица" />
              </picture>
            </div>
            <div className="card__content">
              <h1 className="card__content-title">Rose <small>крем для лица</small></h1>
              <div className="card__text">
                <p>Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.</p>
                <p>Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.</p>
              </div>
              <ul className="card__info">
                <li className="card__accordion accordion">
                  <div className="card__accordion-head">
                    <h2 className="card__accordion-title">Состав</h2>
                    <button className="card__accordion-toggler accordion__toggler" type="button" aria-label="Открыть"><span className="accordion__toggler-icon"></span></button>
                  </div>
                  <div className="card__accordion-content accordion__content">
                    <p className="card__accordion-text accordion__inner">Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene
                      Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower
                      Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.</p>
                  </div>
                </li>
                <li className="card__accordion accordion">
                  <div className="card__accordion-head">
                    <h2 className="card__accordion-title">Способ применения</h2>
                    <button className="card__accordion-toggler accordion__toggler" type="button" aria-label="Открыть"><span
                      className="accordion__toggler-icon"></span></button>
                  </div>
                  <div className="card__accordion-content accordion__content">
                    <div className="card__accordion-text accordion__inner">Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.</div>
                  </div>
                </li>
              </ul>
              <form className="card__options" action="https://echo.htmlacademy.ru" method="POST">
                <div className="card__option">
                  <p className="card__option-title">Объем:</p>
                  <ul className="card__option-list">
                    <li className="card__option-item">
                      <input className="card__input-radio visually-hidden" id="50ml" type="radio" name="volume" value="50ml"
                        checked />
                      <label className="card__radio" htmlFor="50ml">50ml</label>
                    </li>
                    <li className="card__option-item">
                      <input className="card__input-radio visually-hidden" id="30ml" type="radio" name="volume" value="30ml" />
                      <label className="card__radio" htmlFor="30ml">30ml</label>
                    </li>
                  </ul>
                </div>
                <div className="card__price"><span>890 ₽</span>
                  <button className="card__button" id="card-submit" type="submit">Добавить в корзину</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="catalog-history">
          <div className="catalog-history__wrapper">
            <h2>Вам также может понравиться</h2>
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
                    className="product__image" src="img/catalog/lotos@1x.jpg" width="270" height="350" alt="Lotos - маска для лица" />
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
      </main>
    </>
  );
}

export default ProductPage;
