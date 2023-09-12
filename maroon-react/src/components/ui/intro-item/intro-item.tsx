type Props = {
  item: string;
}

function IntroItem({item}: Props): JSX.Element {
  return (
    <li className="categories__item intro-item">
      <img src="./img/mobile/main1-mob@1x.jpg" alt="" className="intro-item__image" />
      <p className="intro-item__title">{item}</p>
      <a href="" className="intro-item__link">
        <svg>
          <use xlinkHref="./img/sprite.svg#main-arrow"></use>
        </svg>
      </a>
    </li>
  );
}

export default IntroItem;
