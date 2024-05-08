import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Banner(): JSX.Element {
  return (
    <section className='main__block banner'>
      <div className='banner__content'>
        <h2 className='banner__title'>Встречайте весну вместе с нами</h2>
        <p className='banner__description'>Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой</p>
        <Link className='banner__link button' to={`${AppRoute.Catalog}?isSPF=true`} aria-label='Подробнее'>Подробнее</Link>
      </div>
    </section>
  );
}

export default Banner;
