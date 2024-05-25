import { Helmet } from 'react-helmet-async';
import Login from '../../components/login/login';

function SignInPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Maroon: Авторизация</title>
      </Helmet>
      <Login />
    </>
  );
}

export default SignInPage;
