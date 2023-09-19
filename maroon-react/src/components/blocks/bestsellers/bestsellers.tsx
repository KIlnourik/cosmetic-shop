import Slider from "../slider/slider";

function Bestsellers(): JSX.Element {
  return (
    <section className="bestsellers">
      <h2 className="bestsellers__title">Бестселлеры</h2>
      <p className="bestsellers__slogan">Легендарные продукты, завоевавшие любовь наших клиентов</p>
      <a href="" className="bestsellers__button button">Смотреть все</a>

      <Slider isBestseller/>

    </section>
  );
}

export default Bestsellers
