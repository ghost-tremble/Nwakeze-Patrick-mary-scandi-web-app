import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import styled, {
  ThemeProvider,
} from 'styled-components';
import App from './App';
import category, {
  categories,
} from './graphql/queries';
import {
  fetchCatalog,
  fetchCategories,
} from './redux/reducers/inventory/inventory.action';
import {
  GlobalStyles,
  lightTheme,
} from './Theme.config';
import client from './graphql/client';
client
  .query({
    query: category,
    variables: { category: 'all' },
  })
  .then((result) =>
    store.dispatch(fetchCatalog(result.data))
  );
client
  .query({ query: categories })
  .then((result) =>
    store.dispatch(fetchCategories(result.data))
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
