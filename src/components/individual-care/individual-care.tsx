
function IndividualCare(): JSX.Element {
  return (
    <section className="main__block individual">
      <div className="individual__container">
        <div className="individual__content">
          <h2 className="individual__title">Индивидуальный уход</h2>
          <p className="individual__text individual__text_hidden-mobile">Не всегда очевидно, какие элементы и минералы необходимы коже, а многочисленные эксперименты с разными средствами только ухудшают ее качество.
          </p>
          <p className="individual__text">Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы.</p>
          <a className="individual__link button" href="#" aria-label="Заполнить анкету">
            Заполнить анкету
          </a>
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
  );
}

export default IndividualCare;
