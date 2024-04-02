import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo(): JSX.Element {
  return (
    <Link className="logo" to={AppRoute.Root}
      aria-label="Логотип Maroon">
      <svg className="logo__image" height="21" width="131">
        <use xlinkHref="#logo-icon"></use>
      </svg>
    </Link>
  );
}

export default Logo;
