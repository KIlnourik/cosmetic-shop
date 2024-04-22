import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import { fetchAllProductsAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './components/spinner/spinner';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

store.dispatch(fetchAllProductsAction);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <HistoryRouter history={browserHistory} >
          <ToastContainer />
          <App />
        </HistoryRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode >,
)
