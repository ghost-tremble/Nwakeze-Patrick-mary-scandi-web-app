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
    console.log(cartItems);
    return (
      <CartOverlay hidden={hidden}>
        <Container>
          <div>
            <H2>
              My Bag,{' '}
              <h3
                style={{
                  fontFamily: 'Raleway',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '26px',
                  letterSpacing: '0em',
                  textAlign: 'right',
                  display: 'inline',
                }}>
                {cartSize} items
              </h3>
            </H2>

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
                <CartItem
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
              <div>
                <p
                  style={{
                    fontFamily:
                      "'Roboto', sans-serif",

                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '112%',
                  }}>
                  Total
                </p>
              </div>
              <div
                style={{
                  marginLeft: 'auto',
                }}>
                <p
                  style={{
                    fontFamily: 'Raleway',

                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '160%',
                  }}>
                  {currency}
                  {Number(cartTotal).toLocaleString()}
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
      </CartOverlay>
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

const CartOverlay = styled.div`
  position: absolute;
  top: 4.9rem;
  height: 100vh;
  width: 100%;
  display: ${(props) =>
    props.hidden ? 'none' : 'block'};
  background-color: rgba(57, 55, 72, 0.22);
`;
const Container = styled.div`
  height: 33.75em;
  width: 20.3em;
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
margin-bottom:25px;
}
`;
const Total = styled.div`
  display: flex;
  margin-bottom: 2.19rem;
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
