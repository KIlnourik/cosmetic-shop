
function ProductScreen(): JSX.Element {
  return (
    <main className="page-main main">
      <h1 className="main__title visually-hidden">Product</h1>
      <section className="product">
        <div className="product__img-wrapper">
          <img src="" alt="" className="product__img" />
        </div>
        <div className="product__info-wrapper">
          <h2 className="product__title">Rose</h2>
          <p className="product__type">Крем для лица</p>
          <p className="product__desc">Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.
            Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение,
            регенерацию клеток.
          </p>

          <div className="product__dropdown dropdown">
            <div className="dropdown__wrapper">
              <h3 className="dropdown__title">Состав</h3>
              <button className="dropdown__btn"></button>
            </div>
            <p className="dropdown__desc">Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.</p>
          </div>

          <div className="product__dropdown dropdown">
            <div className="dropdown__wrapper">
              <h3 className="dropdown__title"> Способ применения</h3>
              <button className="dropdown__btn"></button>
            </div>
            <p className="dropdown__desc">Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. </p>
          </div>
        </div>

        <fieldset className="product__volume volume">
          <h3 className="volume__title">Объем:</h3>
          <label htmlFor="volume">
            <input type="radio" name="volume" id="50ml" />
            50ml
          </label>
          <label htmlFor="volume">
            <input type="radio" name="volume" id="30ml" />
            30ml
          </label>
        </fieldset>

        <div className="product__price">890 &#x20bd;</div>
        <button className="product__btn button">Добавить в корзину</button>
      </section>

      <section className="might-like">

      </section>
    </main>
  );
}

export default ProductScreen;
