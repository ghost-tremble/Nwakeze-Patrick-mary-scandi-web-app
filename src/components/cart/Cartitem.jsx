import { Component } from 'react';
import styled from 'styled-components';
import { getCurrentCurrency } from '../../utils/getCurrentCurrency';
import { connect } from 'react-redux';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Minus } from '../../assets/minus.svg';
class CartItem extends Component {
  render() {
    const {
      name,
      brand,
      image,
      prices,
      quantity,
      addItem,
      removeItem,
    } = this.props;
    return (
      <Container>
        <div style={{}}>
          <div
            style={{
              marginBottom: '25px',
            }}>
            <p
              style={{
                fontFamily: 'Raleway',
                fontSize: '16',
                fontWeight: '300',
                lineHeight: '26px',
                letterSpacing: '0px',
                textAlign: 'left',
                width: '136px',
                marginBottom: '5px',
              }}>
              {brand}
            </p>
            <p
              style={{
                fontFamily: 'Raleway',
                fontSize: '16',
                fontWeight: '300',
                lineHeight: '26px',
                letterSpacing: '0px',
                textAlign: 'left',
                width: '136px',
                marginBottom: '5px',
              }}>
              {name}
            </p>
            <h3
              style={{
                fontFamily: 'Raleway',
                fontSize: '16px',
                fontWeight: '500px',
                lineHeight: '26px',

                letterSpacing: '0em',
              }}>
              {getCurrentCurrency(
                prices,
                this.props.currentCurrency
              )}
            </h3>
          </div>
          <div
            style={{
              display: 'flex',
            }}>
            <Box marginRight="8px">S</Box>
            <Box background="#A6A6A6">M</Box>
          </div>
        </div>
        <div>
          {/*  image contsine*/}
          <div
            style={{
              display: 'flex',
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: '10px',
              }}>
              <div
                style={{
                  cursor: 'pointer',
                }}>
                <Plus onClick={() => addItem()} />
              </div>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <h3>{quantity}</h3>
              </div>
              <div
                style={{
                  cursor: 'pointer',
                }}>
                <Minus
                  onClick={() => removeItem()}
                />
              </div>
            </div>
            <div style={{}}>
              <img
                src={image}
                style={{
                  width: '6.6rem',
                  height: '8.9rem',
                  objectFit: 'contain',
                }}
                alt="cartimage"
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    currentCurrency:
      state.currency.currentCurrency,
  };
};
export default connect(MapStateToProps)(CartItem);
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 2.75em 0px;
`;
const Box = styled.div`
  border: 1px solid;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  margin-right: ${(props) => props.marginRight};
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  cursor: pointer;
  background: ${(props) =>
    props.background || props.selected};
`;
