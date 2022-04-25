import React from 'react';

import ReactDOM from 'react-dom';
import store from './redux/store';
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
} from './redux/reducers/inventory/inventory.action';
import {
  GlobalStyles,
  lightTheme,
} from './Theme.config';
import client from './graphql/client';
import { fetchCurrecies } from './redux/reducers/currency/currency.action';

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

Promise.all([a, b, c]).then(() =>
  store.dispatch(updateLoadingState(false))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
