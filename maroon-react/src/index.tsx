import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
