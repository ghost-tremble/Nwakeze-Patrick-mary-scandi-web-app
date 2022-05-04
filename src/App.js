import { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Category from './components/Category';
// import HomePage from './pages/Home';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import './_app.css';
import ProductPage from './pages/ProductPage';
import Currency from './components/Currency';
import Loader from './components/Loader';
import CartOverLay from './components/cart/CartOverLay';
class App extends PureComponent {
  render() {
    const { isLoading, categories } = this.props;

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <Router>
            <Route>
              <Container>
                <Header />
                <CartOverLay />
                <Currency />
              </Container>
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
              <Route path="/cart">
                <CartPage />
              </Route>
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

const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;
