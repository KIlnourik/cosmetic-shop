import Register from '../../components/register/register';
import { Helmet } from 'react-helmet-async';

function SignUpPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Maroon: Регистрация</title>
      </Helmet>
      <Register />
    </>
  );
}

export default SignUpPage;
