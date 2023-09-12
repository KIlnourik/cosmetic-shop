type Props = {
  social: string;
}

function NavSocialItem({social}: Props): JSX.Element {
  return (
    <li className="social__item">
      <a href="" className="social__link">
        <svg className="social__icon">
          <use xlinkHref={`./img/sprite.svg#${social}-icon`}></use>
        </svg>
        <span className="social__name visually-hidden">{social}</span>
      </a>
    </li>
  );
}

export default NavSocialItem;
