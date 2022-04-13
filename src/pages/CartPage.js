import React, { Component } from 'react';
import CartPageItem from '../components/cart/CartPageItem';
import styled from 'styled-components';

class CartPage extends Component {
  render() {
    return (
      <Container>
        <div className="cart-section">
          <h1>Cart</h1>
        </div>
        <CartPageItem />
        <CartPageItem />
      </Container>
    );
  }
}
export default CartPage;

const Container = styled.div`
  height: 100vh;
  margin: 80px 0px 100px 54px;
  width: 100%;
  display: flex;
  padding-left: 100px;
  flex-direction: column;

  .cart-section {
    margin-top: 80px;
    margin-bottom: 59px;
    width: 100%;
  }
`;
