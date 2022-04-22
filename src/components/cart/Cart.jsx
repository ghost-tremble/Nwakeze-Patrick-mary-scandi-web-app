import { Component } from 'react';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import CartItem from './Cartitem';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/reducers/cart/cart.selector';
// cart for showing products
class Cart extends Component {
  render() {
    const { hidden } = this.props;
    console.log(hidden);
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
                {'2'} items
              </h3>
            </H2>
            <CartItem />

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
                  ${'100'}
                </p>
              </div>
            </Total>
            <ButtonContainer>
              <Button margin="12px">
                VIEW BAG
              </Button>
              <Button
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
  });
};
export default connect(MapStateToProps)(Cart);

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
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  width: 140px;
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
`;
