import React, { Component } from 'react';
import CartPageItem from '../components/cart/CartPageItem';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  addItem,
  removeItem,
} from '../redux/reducers/cart/cart.actions';
import {
  selectCartHidden,
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
  selectCurrentCurrency,
} from '../redux/reducers/cart/cart.selector';
class CartPage extends Component {
  render() {
    const {
      cartItems,
      removeItem,
      addItem,
      currency,
      cartSize,
      cartTotal,
    } = this.props;
    return (
      <Container>
        <div className="cart-section">
          <h1>CART</h1>
        </div>
        <Line />
        {cartItems.map((item) => {
          const {
            name,
            selectedAttributes,
            brand,
            prices,
            gallery,
            attributes,
          } = item;
          console.log(gallery[0]);
          return (
            <>
              <CartPageItem
                name={name}
                brand={brand}
                prices={prices}
                image={gallery[0]}
                attributes={attributes}
                quantity={item.quantity}
                addItem={() => addItem(item)}
                selectedAttributes={
                  selectedAttributes
                }
                removeItem={() =>
                  removeItem(item)
                }
              />
              <Line />
            </>
          );
        })}

        <Total>
          <div>
            <span>
              <p>
                Tax: <h3>{currency + '150'}</h3>
              </p>
            </span>
            <span>
              <p>
                Qty: <h3>{cartSize}</h3>
              </p>
            </span>
          </div>

          <div>
            <span>
              <p>
                Total:{' '}
                <h3>
                  {currency}
                  {cartTotal}
                </h3>
              </p>
            </span>
          </div>
        </Total>
      </Container>
    );
  }
}

const MapStateToProps = (state) => {
  return createStructuredSelector({
    hidden: selectCartHidden,
    cartItems: selectCartItems,
    cartSize: selectCartItemsCount,
    cartTotal: selectCartTotal,
    currency: selectCurrentCurrency,
  });
};
const MapDispatchToProps = (dispatch) => {
  return {
    addItem: (data) => dispatch(addItem(data)),
    removeItem: (data) =>
      dispatch(removeItem(data)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(CartPage);

const Container = styled.div`
  height: 100vh;
  margin: 80px 0px 0px 0px;
  width: 100%;
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
  flex-direction: column;
  h1 {
    font-family: Raleway;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
  }
  .cart-section {
    margin-top: 80px;
    margin-bottom: 59px;
    width: 100%;
  }
`;

const Line = styled.div`
  border: 1px solid #e5e5e5;
  margin-bottom: 24px;
`;

const Total = styled.div`
  div {
    h3 {
      font-family: Raleway;
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      display: inline;
    }
    p {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
    }
  }
`;
