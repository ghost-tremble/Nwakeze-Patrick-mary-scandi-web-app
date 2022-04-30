import { Component } from 'react';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import { selectCartHidden } from '../../redux/reducers/cart/cart.selector';
// cart for showing products
class Overlay extends Component {
  render() {
    const { hidden } = this.props;

    return (
      <CartOverlay hidden={hidden}></CartOverlay>
    );
  }
}

const MapStateToProps = (state) => {
  return createStructuredSelector({
    hidden: selectCartHidden,
  });
};

export default connect(MapStateToProps)(Overlay);

const CartOverlay = styled.div`
  position: absolute;
  top: 4.9rem;
  height: 100vh;
  width: 100%;
  z-index: -1;
  left: 0;
  transform: ${(props) =>
    props.hidden ? 'scale(0)' : 'scale(1)'};
  background-color: rgba(57, 55, 72, 0.22);
`;
