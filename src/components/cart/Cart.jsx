import { Component } from 'react';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';
import CartItem from './Cartitem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addItem,
  removeItem,
} from '../../redux/reducers/cart/cart.actions';
import {
  selectCartHidden,
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
  selectCurrentCurrency,
} from '../../redux/reducers/cart/cart.selector';
import { toggleCartHidden } from '../../redux/reducers/cart/cart.actions';
// cart for showing products
class Cart extends Component {
  render() {
    const {
      hidden,
      closeCart,
      cartItems,
      cartSize,
      removeItem,
      addItem,
      cartTotal,
      currency,
    } = this.props;

    return (
      <Container hidden={hidden}>
        <div>
          <H2>
            My Bag, <p>{cartSize} items</p>
          </H2>

          {cartItems.map((item, index) => {
            const {
              name,
              selectedAttributes,
              brand,
              prices,
              gallery,
              attributes,
              id,
            } = item;

            return (
              <CartItem
                key={index}
                id={id}
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
            );
          })}

          <Total>
            <div className="title">
              <p>Total</p>
            </div>
            <div className="price">
              <p>
                {currency}
                {Number(
                  cartTotal
                ).toLocaleString()}
              </p>
            </div>
          </Total>
          <ButtonContainer>
            <Button
              to="/cart"
              onClick={() => closeCart()}
              margin="12px">
              VIEW BAG
            </Button>
            <Button
              to="/checkout"
              background="#5ECE7B"
              color="#FFFFFF">
              CHECK OUT
            </Button>
          </ButtonContainer>
        </div>
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
    closeCart: () => dispatch(toggleCartHidden()),
    addItem: (data) => dispatch(addItem(data)),
    removeItem: (data) =>
      dispatch(removeItem(data)),
  };
};
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Cart);

const Container = styled.div`
  height: 33.75em;
  top: 4.9rem;
  width: 20.3em;
  transform: ${(props) =>
    props.hidden ? 'scale(0)' : 'scale(1)'};
  position: absolute;
  background-color: #ffffff;
  padding: 0.5rem 1rem 1.24rem;
  right: 87px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const H2 = styled.h2`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 25px;
  p {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
    display: inline;
  }
`;
const Total = styled.div`
  display: flex;
  margin-bottom: 2.19rem;
  .title {
    p {
      font-family: Roboto, sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 112%;
    }
  }
  .price {
    margin-left: auto;
    p {
      font-family: Raleway;
      font-weight: 700;
      font-size: 16px;
      line-height: 160%;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 20px 0px;
`;
export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  width: ${(props) => props.width || '140px'};
  height: 43px;
  margin: 0px ${(props) => props.margin} 0px 0px;
  border: ${(props) =>
    props.background
      ? '1px solid transparent'
      : '1px solid #1D1F22'};
  background-color: ${(props) =>
    props.background};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  cursor: pointer;

  text-decoration: none;
`;
