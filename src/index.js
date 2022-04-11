import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import styled, {
  ThemeProvider,
} from 'styled-components';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import {
  GlobalStyles,
  lightTheme,
} from './Theme.config';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
      {
        product(id: "huarache-x-stussy-le") {
          name
          inStock
          gallery
          description
          category
          brand
        }
      }
    `,
  })
  .then((result) => console.log(result));
// client
//   .query({
//     query: {
//       query: gql`
//         query {
//           product(id: "huarache-x-stussy-le") {
//             name
//             inStock
//             gallery
//             description
//             category
//             brand
//           }
//         }
//       `,
//     },
//   })
//   .then((results) => console.log(results));

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
