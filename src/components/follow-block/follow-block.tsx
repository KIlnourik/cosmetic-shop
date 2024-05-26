import { Link } from 'react-router-dom';

function FollowBlock(): JSX.Element {
  return (
    <section className='main__block follow'>
      <div className='follow__container'>
        <div className='follow__image-wrapper'>
          <picture>
            <source type='image/webp' srcSet='img/join1@1x.webp 1x, img/join1@2x.webp 2x' />
            <source type='image/jpeg' srcSet='img/join1@1x.jpg 1x, img/join1@2x.jpg 2x' /><img className='follow__image' src='img/join1@1x.jpg' alt='Присоединяйтесь к нам' height='233' width='233' />
          </picture>
          <picture>
            <source type='image/webp' srcSet='img/join2@1x.webp 1x, img/join2@2x.webp 2x' />
            <source type='image/jpeg' srcSet='img/join2@1x.jpg 1x, img/join2@2x.jpg 2x' /><img className='follow__image' src='img/join2@1x.jpg' alt='Присоединяйтесь к нам' height='233' width='233' />
          </picture>
          <picture>
            <source type='image/webp' srcSet='img/join3@1x.webp 1x, img/join3@2x.webp 2x' />
            <source type='image/jpeg' srcSet='img/join3@1x.jpg 1x, img/join3@2x.jpg 2x' /><img className='follow__image' src='img/join3@1x.jpg' alt='Присоединяйтесь к нам' height='233' width='233' />
          </picture>
          <picture>
            <source type='image/webp' srcSet='img/join4@1x.webp 1x, img/join4@2x.webp 2x' />
            <source type='image/jpeg' srcSet='img/join4@1x.jpg 1x, img/join4@2x.jpg 2x' /><img className='follow__image' src='img/join4@1x.jpg' alt='Присоединяйтесь к нам' height='700' width='233' />
          </picture>
          <picture>
            <source type='image/webp' srcSet='img/join5@1x.webp 1x, img/join5@2x.webp 2x' />
            <source type='image/jpeg' srcSet='img/join5@1x.jpg 1x, img/join5@2x.jpg 2x' /><img className='follow__image' src='img/join5@1x.jpg' alt='Присоединяйтесь к нам' height='233' width='233' />
          </picture>
          <picture>
            <source type='image/webp' srcSet='img/join6@1x.webp 1x, img/join6@2x.webp 2x' />
            <source type='image/jpeg' srcSet='img/join6@1x.jpg 1x, img/join6@2x.jpg 2x' /><img className='follow__image' src='img/join6@1x.jpg' alt='Присоединяйтесь к нам' height='233' width='233' />
          </picture>
        </div>
        <div className='follow__content'>
          <h2 className='follow__title'>Присоединяйтесь к нам</h2>
          <p className='follow__text'>Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми</p>
          <Link className='follow__link button' to='#' aria-label='Подписаться'>Подписаться</Link>
        </div>
      </div>
    </section>
  );
}

export default FollowBlock;
