import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selector';

type Props = {
  children: JSX.Element;
}

function PrivateRoute(props: Props): JSX.Element {
  const { children } = props;
  const authStatus = useAppSelector(getAuthStatus);
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
