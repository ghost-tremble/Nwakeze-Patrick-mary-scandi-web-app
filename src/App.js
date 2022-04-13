import { PureComponent } from 'react';
import { connect } from 'react-redux';
import Category from './components/Category';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import Cart from './components/cart/Cart';
import './_app.css';
import ProductPage from './pages/ProductPage';
class App extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <div
          style={{
            position: 'fixed',
            width: '100%',
            top: '0',
            zIndex: '100',
          }}>
          <Header />
          {/* <Cart /> */}
        </div>

        {/* <Category /> */}
        {/* <ProductPage /> */}
        <CartPage />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    post: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({
        type: 'DELETE_POST',
        payload: '1',
      });
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
