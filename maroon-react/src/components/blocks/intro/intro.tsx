import { INTRO_ITEMS } from '../../../const';
import IntroItem from '../../ui/intro-item/intro-item';


function Intro(): JSX.Element {
  return (
    <section className="intro">
      <h1 className="intro__title">Maroon</h1>
      <p className="intro__slogan">Натуральная косметика для бережного ухода за кожей</p>
      <button className="intro__button button">Подробнее</button>
      <div className="intro__categories categories">
        <ul className="categories__list">
          {INTRO_ITEMS.map((item) => <IntroItem item={item} />)}
        </ul>
      </div>
    </section>
  );
}

export default Intro;
