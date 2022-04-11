import { Component } from 'react';
import styled from 'styled-components';
class CartItem extends Component {
  render() {
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
              Apollo Running Short
            </p>
            <h3
              style={{
                fontFamily: 'Raleway',
                fontSize: '16px',
                fontWeight: '500px',
                lineHeight: '26px',

                letterSpacing: '0em',
              }}>
              $50.00
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
              <Box>-</Box>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <h3>{'3'}</h3>
              </div>
              <Box>+</Box>
            </div>
            <div
              style={{
                width: '6.6rem',
                height: '8.9rem',
                border: '1px solid red',
              }}></div>
          </div>
        </div>
      </Container>
    );
  }
}

export default CartItem;
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
