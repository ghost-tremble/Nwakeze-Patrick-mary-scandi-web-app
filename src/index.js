import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom';
import store, { savedStore } from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import category, {
  categories,
  currencies,
} from './graphql/queries';
import {
  fetchCatalog,
  fetchCategories,
  updateLoadingState,
  updateErrorState,
} from './redux/reducers/inventory/inventory.action';
import {
  GlobalStyles,
  lightTheme,
} from './Theme.config';
import client from './graphql/client';
import { fetchCurrecies } from './redux/reducers/currency/currency.action';
import { BrowserRouter } from 'react-router-dom';

// graphql queries
const c = client
  .query({
    query: category,
    variables: { category: 'all' },
  })
  .then((result) =>
    store.dispatch(fetchCatalog(result.data))
  );
const b = client
  .query({ query: categories })
  .then((result) =>
    store.dispatch(fetchCategories(result.data))
  );
const a = client
  .query({ query: currencies })
  .then((result) =>
    store.dispatch(fetchCurrecies(result.data))
  );

Promise.all([a, b, c])
  .then(() =>
    store.dispatch(updateLoadingState(false))
  )
  .catch((e) =>
    store.dispatch(
      updateErrorState('connection Time Out')
    )
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <BrowserRouter>
        <PersistGate persistor={savedStore}>
          <App />
        </PersistGate>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
