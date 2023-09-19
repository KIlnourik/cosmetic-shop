
function Logo(): JSX.Element {
  return (
    <div className="logo">
      <svg className="logo__icon">
        <use xlinkHref="./img/sprite.svg#logo-icon"></use>
      </svg>
    </div>
  );
}

export default Logo;
