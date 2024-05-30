import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FollowBlock from '../../components/follow-block/follow-block';
import Contacts from '../../components/contacts/contacts';
import Bestsellers from '../../components/bestsellers/bestsellers';
import About from '../../components/about/about';
import Banner from '../../components/banner/banner';
import IndividualCare from '../../components/individual-care/individual-care';

function MainPage(): JSX.Element {

  return (
    <>
      <Helmet>
        <title>Maroon</title>
      </Helmet>
      <main className="main main_no-top-spaced">
        <About />
        <Bestsellers />
        <Banner />
        <IndividualCare />
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
