import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FollowBlock from '../../components/follow-block/follow-block';
import Contacts from '../../components/contacts/contacts';
import Bestsellers from '../../components/bestsellers/bestsellers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllProducts, getAllProductsLoadingStatus } from '../../store/product-process/selector';
import { useEffect } from 'react';
import { fetchAllProductsAction } from '../../store/api-actions';

function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const products = useAppSelector(getAllProducts);
  const isProductsLoading = useAppSelector(getAllProductsLoadingStatus);


  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Maroon</title>
      </Helmet>
      <main className="main main_no-top-spaced">
        <section className="main__block about">
          <div className="about__container">
            <div className="about__content">
              <h1 className="about__title">MAROON</h1>
              <p className="about__description">Натуральная косметика<br />для бережного ухода за кожей</p>
              <a className="about__button button" href="#">Подробнее</a>
            </div>
            <Link className="about__item promo-card" to="#">
              <picture>
                <source type="image/webp" media="(min-width: 1200px)" srcSet="img/main1@1x.webp 1x, img/main1@2x.webp 2x" />
                <source type="image/jpeg" media="(min-width: 1200px)" srcSet="img/main1@1x.jpg 1x, img/main1@2x.jpg 2x" />
                <source type="image/webp" media="(min-width: 768px)"
                  srcSet="img/main1-lap@1x.webp 1x, img/main1-lap@2x.webp 2x" />
                <source type="image/jpeg" media="(min-width: 768px)"
                  srcSet="img/main1-lap@1x.jpg 1x, img/main1-lap@2x.jpg 2x" />
                <source type="image/webp" srcSet="img/main1-mob@1x.webp 1x, img/main1-mob@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/main1-mob@1x.jpg 1x, img/main1-mob@2x.jpg 2x" />
                <img
                  className="promo-card__image" src="img/main1@1x.jpg" width="330" height="422" alt="Уход для лица" />
              </picture>
              <div className="promo-card__text"><span>Уход для лица</span>
                <svg className="promo-card__icon" height="12" width="26">
                  <use xlinkHref="#main-arrow"></use>
                </svg>
              </div>
            </Link>
            <Link className="about__item promo-card" to="#">
              <picture>
                <source type="image/webp" media="(min-width: 1200px)" srcSet="img/main2@1x.webp 1x, img/main2@2x.webp 2x" />
                <source type="image/jpeg" media="(min-width: 1200px)" srcSet="img/main2@1x.jpg 1x, img/main2@2x.jpg 2x" />
                <source type="image/webp" media="(min-width: 768px)"
                  srcSet="img/main2-lap@1x.webp 1x, img/main2-lap@2x.webp 2x" />
                <source type="image/jpeg" media="(min-width: 768px)"
                  srcSet="img/main2-lap@1x.jpg 1x, img/main2-lap@2x.jpg 2x" />
                <source type="image/webp" srcSet="img/main2-mob@1x.webp 1x, img/main2-mob@2x.webp 2x" />
                <source type="image/jpeg" srcSet="img/main2-mob@1x.jpg 1x, img/main2-mob@2x.jpg 2x" /><img
                  className="promo-card__image" src="img/main2@1x.jpg" width="330" height="422" alt="Уход для тела" />
              </picture>
              <div className="promo-card__text"><span>Уход для тела</span>
                <svg className="promo-card__icon" height="12" width="26">
                  <use xlinkHref="#main-arrow"></use>
                </svg>
              </div>
            </Link>
          </div>
        </section>
        <Bestsellers/>
        <section className="main__block banner">
          <div className="banner__content">
            <h2 className="banner__title">Встречайте весну вместе с нами</h2>
            <p className="banner__description">Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой</p>
            <Link className="banner__link button" to="#" aria-label="Подробнее">Подробнее</Link>
          </div>
        </section>
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
        <section className="main__block history">
          <div className="history__container">
            <h2 className="visually-hidden">О Maroon</h2>
            <p className="history__title">“Мы стремимся сделать уход за кожей доступным и приятным ритуалом для всех, кто хочет заботиться о себе и своем теле”</p>
            <Link className="history__link button" to="#" aria-label="Наша история">Наша история</Link>
          </div>
        </section>
        <FollowBlock />
        <Contacts />
      </main>
    </>
  );
}

export default MainPage;
