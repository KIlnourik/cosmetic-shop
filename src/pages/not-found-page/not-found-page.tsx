import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <main className="main main_top-spaced" style={{display: 'flex', margin: 'auto', alignItems: 'center', justifyContent: 'center'}}>
      <div className="page-wrapper" data-testid="page-content">
        <img src="/img/travolta.png" alt="Растерянный Траволта" />
        <div className="text-wrapper">
          <h1>
            <b>Ошибка&nbsp;404!</b ><br />
            <b>Такой страницы не&nbsp;существует.</b>
          </h1>
          <Link to={AppRoute.Root} className="button" style={{textAlign: 'center'}}>Вернуться на Главную</Link>
        </div>
      </div >
    </main>
  );
}

export default NotFoundPage;
