import { Component } from 'react';
import styled from 'styled-components';
import { ReactComponent as ShopLogo } from '../assets/headerIcons/shop-logo.svg';
class Loader extends Component {
  render() {
    return (
      <Container>
        <ShopLogo />
      </Container>
    );
  }
}

export default Loader;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
