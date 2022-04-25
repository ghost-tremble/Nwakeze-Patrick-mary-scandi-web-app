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
import { Button } from '../components/cart/Cart';
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
          <div className="tax">
            <span>
              <p>
                Tax:{' '}
                <h3>
                  {currency +
                    (
                      Number(cartTotal) * 0.1
                    ).toLocaleString()}
                </h3>
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
                  {Number(
                    cartTotal
                  ).toLocaleString()}
                </h3>
              </p>
            </span>
          </div>
        </Total>
        <Button
          width="249px"
          background="#5ECE7B;
        
"
          color="#ffffff">
          ORDER
        </Button>
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
  margin: 80px 0px 0px 0px;
  width: 100%;
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 258px;
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
  margin-bottom: 16px;
  margin-top: 32px;
  .tax {
    margin-bottom: 24px;
  }
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
