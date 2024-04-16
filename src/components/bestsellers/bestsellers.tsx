import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import { Product } from '../../types/product';
import Spinner from '../spinner/spinner';
import { getProductTitle } from '../../utils/utils';
import { getAllProducts, getAllProductsLoadingStatus } from '../../store/product-process/selector';
import { useAppSelector } from '../../hooks';

function Bestsellers(): JSX.Element {

  const products = useAppSelector(getAllProducts);
  const isProductsLoading = useAppSelector(getAllProductsLoadingStatus);

  const getBestsellersProducts = (products: Product[]): Product[] => products.filter((product) => product.isBestSeller);
  const bestsellersProducts: Product[] = getBestsellersProducts(products);

  return (
    <section className="main__block best-sellers">
      <div className="best-sellers__text">
        <h2 className="best-sellers__title">Бестселлеры</h2>
        <p className="best-sellers__description">Легендарные продукты, завоевавшие любовь наших клиентов</p>
        <Link className="best-sellers__link button" to={AppRoute.Catalog} aria-label="Смотреть все">
          Смотреть все
        </Link>
      </div>
      {bestsellersProducts.length &&
        <Swiper
          className='best-sellers__slider slider swiper-container'
          modules={[Navigation]}
          navigation={{
            nextEl: `.slider__button_next`,
            prevEl: `.slider__button_prev`,
          }}
          slidesPerView={4}
          spaceBetween={30}
          loop
          updateOnWindowResize
          breakpoints={{
            320: {
              width: 970
            },
            768: {
              width: 1010
            }
          }}
        >
          <div className="slider__wrapper">
            {
              bestsellersProducts.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="slider__item product-card">
                    <picture>
                      <source type="image/webp" srcSet={`${item.previewImage}@1x.webp 1x, ${item.previewImage}@2x.webp 2x`} />
                      <source type="image/jpeg" srcSet={`${item.previewImage}@1x.jpg 1x, ${item.previewImage}@2x.jpg 2x`} />
                      <img
                        className="product-card__image" src={`${item.previewImage}@1x.jpg`} alt="High - крем для лица" height="312" width="230" />
                    </picture>
                    <h3 className="product-card__title">{getProductTitle(item.name)}</h3>
                    <p className="product-card__description">{item.type}</p>
                    <Link className="product-card__link" to="#" aria-label="Подробнее">Подробнее</Link>
                  </div>
                </SwiperSlide>
              ))
            }
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
        </Swiper>
      }
      {isProductsLoading && <Spinner />}
      <a className="best-sellers__link best-sellers__link_mobile button" href="#" aria-label="Смотреть все">Смотреть все</a>
    </section >
  )
}

export default Bestsellers;
