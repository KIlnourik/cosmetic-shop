
function Auth(): JSX.Element {
  return (
    <a href="#" className="auth">
      <span className="visually-hidden">Авторизация</span>
      <svg className="auth__icon">
        <use xlinkHref="./img/sprite.svg#user-icon"></use>
      </svg>
    </a>
  );
}

export default Auth;
