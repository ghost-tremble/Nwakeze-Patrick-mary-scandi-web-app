import { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Category from './components/Category';
// import HomePage from './pages/Home';
import Header from './components/Header';
import category, {
  categories,
} from './graphql/queries';
import {
  fetchCatalog,
  fetchCategories,
} from './redux/reducers/inventory/inventory.action';
import CartPage from './pages/CartPage';
import Cart from './components/cart/Cart';
import './_app.css';
import client from './graphql/client';
import ProductPage from './pages/ProductPage';
import Currency from './components/Currency';
class App extends PureComponent {
  render() {
    const { isLoading, categories } = this.props;

    return (
      <>
        {isLoading ? (
          <h1>hello</h1>
        ) : (
          <Router>
            <Route>
              <div
                style={{
                  position: 'fixed',
                  width: '100%',
                  top: '0',
                  zIndex: '100',
                }}>
                <Header />
                <Cart />
                <Currency />
              </div>
            </Route>
            <Switch>
              {/* create route from category items */}
              <Route exact path="/">
                <Redirect to="/all" />
              </Route>
              {categories.categories.map(
                (item, index) => (
                  <Route
                    key={index}
                    exact
                    path={`/${item.name}`}>
                    <Category name={item.name} />
                  </Route>
                )
              )}

              {/* dynaminc routing to product page  */}
              {categories.categories.map(
                (item, index) => (
                  <Route
                    key={index}
                    path={`/${item.name}/:id`}>
                    <ProductPage />
                  </Route>
                )
              )}
            </Switch>
          </Router>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.inventory.isLoading,
    categories: state.inventory.categories,
  };
};

export default connect(mapStateToProps)(App);
