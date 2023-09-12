

function CatalogScreen(): JSX.Element {
  return (

    <main className="page-main main">
      <h1 className="main__title visually-hidden">Каталог</h1>
      <section className="catalog">
        <h2 className="catalog__title"></h2>
        <div className="catalog__filter-wrapper">
          <a className="catalog__filter filter">Фильтр
            <div className="filter__section">
              <h3 className="filter__title">
                <a href="" className="filter__title-link">
                </a>
              </h3>
              <ul className="filter__category-list">
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter__section">
              <h3 className="filter__title">
                <a href="" className="filter__title-link">
                </a>
              </h3>
              <ul className="filter__category-list">
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter__section">
              <h3 className="filter__title">
                <a href="" className="filter__title-link">
                </a>
              </h3>
              <ul className="filter__category-list">
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
                <li className="filter__item">
                  <label htmlFor="" className="filter__label">
                    <input type="checkbox" name="" id="" className="filter__input" />
                  </label>
                </li>
              </ul>
            </div>
          </a>
        </div>

        <div className="slider">
          <ul className="slider__list">
            <li className="slider__item product">
              <img src="" alt="" className="product__img" />
              <div className="slider__card bestsellers">
                <h3 className="product__title"></h3>
                <p className="product__price"></p>
                <p className="product__desc"></p>
                <p className="product__volume"></p>
              </div>
            </li>
          </ul>

          <div className="catalog__breadcrumbs"></div>

          <div className="slider__controls">
            <button className="slider__btn slider__btn--prev">
              <svg>
              </svg>
            </button>
            <button className="slider__btn slider__btn--next">
              <svg>
              </svg>
            </button>
          </div>
        </div>
        <ul className="catalog__product-list">
          <li className="catalog__product product">
            <img src="" alt="" className="product__img" />
            <h3 className="product__title"></h3>
            <p className="product__price"></p>
            <p className="product__descr"></p>
            <p className="product__volume"></p>
          </li>
          <div className="catalog__breadcrumbs"></div>

          <div className="slider__controls">
            <button className="slider__btn slider__btn--prev">
              <svg>
              </svg>
            </button>
            <button className="slider__btn slider__btn--next">

            </button>
          </div>
        </ul>
      </section>
      <section className="main__subscribe subscribe">
        <h2 className="subscribe__title"></h2>
        <p className="subscribe__slogan"></p>
        <button className="subscribe__btn"></button>
        <ul className="subscribe__image-list">
          <li className="subscribe__image-item"><img src="" alt="" className="subscribe__image" /></li>
          <li className="subscribe__image-item"><img src="" alt="" className="subscribe__image" /></li>
          <li className="subscribe__image-item"><img src="" alt="" className="subscribe__image" /></li>
          <li className="subscribe__image-item"><img src="" alt="" className="subscribe__image" /></li>
          <li className="subscribe__image-item"><img src="" alt="" className="subscribe__image" /></li>
          <li className="subscribe__image-item"><img src="" alt="" className="subscribe__image" /></li>
        </ul>
      </section>

      <section className="main__contacts contacts">
        <h2 className="contacts__title"></h2>
        <ul className="contacts__list">
          <li className="contacts__item">
            <h3 className="contacts__title"></h3>
            <p className="contacts__desc"></p>
          </li>
          <li className="contacts__item">
            <h3 className="contacts__title"></h3>
            <p className="contacts__desc"></p>
          </li>
          <li className="contacts__item">
            <h3 className="contacts__title"></h3>
            <p className="contacts__desc"></p>
          </li>
        </ul>
        <ul className="contacts__social-list">
          <li className="social__item">
            <p className="social__name visually-hidden"></p>
          </li>
          <li className="social__item">
            <p className="social__name visually-hidden"></p>
          </li>
          <li className="social__item">
            <p className="social__name visually-hidden"></p>
          </li>
        </ul>
        <div className="contacts__map-wrapper"></div>
      </section>
    </main>
  );
}

export default CatalogScreen;
