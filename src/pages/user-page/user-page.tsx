import { Helmet } from "react-helmet-async";
import User from "../../components/user/user";

function UserPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Maroon: Пользователь</title>
      </Helmet>
      <main className="main main_top-spaced catalog-main" >
        <User />
      </main>
    </>
  )
}

export default UserPage;
