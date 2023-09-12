import BestsellerCard from "../../ui/bestseller-card/bestseller-card";

type Props = {
  isBestseller?: boolean;
};

function Slider({ isBestseller }: Props): JSX.Element {
  return (
    <div className="slider">
      <ul className="slider__list">
        <li className="slider__item">
          {isBestseller ?
            <BestsellerCard /> :
            ''}
        </li>
      </ul>

      <div className="slider__controls">
        <button className="slider__btn slider__btn--prev">
          <svg>
          </svg>
        </button>
        <button className="slider__btn slider__btn--next">
        </button>
      </div>
    </div>
  );
}

export default Slider;
