import React, { Component } from 'react';
import styled from 'styled-components';
class CartPageItem extends Component {
  render() {
    return (
      <Container>
        {' '}
        <div style={{}}>
          <div
            style={{
              marginBottom: '25px',
            }}>
            <p
              style={{
                fontFamily: 'Raleway',
                fontSize: '30',
                fontWeight: '700',
                letterSpacing: '0px',
                textAlign: 'left',
                width: '136px',
                marginBottom: '16px',
              }}>
              Apollo
            </p>
            <p
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '30px',
                lineHeight: '27px',
                marginBottom: '12px',
              }}>
              Running Short
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
            <Box marginRight="8px" width="63px">
              S
            </Box>
            <Box
              width="63px"
              background="#000000"
              color="#ffffff">
              M
            </Box>
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
              <Box width="45px">-</Box>
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
              <Box width="45px">+</Box>
            </div>
            <div
              style={{
                width: '141px',
                height: '185px',
                border: '1px solid red',
              }}></div>
          </div>
        </div>
      </Container>
    );
  }
}

export default CartPageItem;

const Container = styled.div`
  width: 1098px;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Box = styled.div`
  border: 1px solid;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  margin-right: ${(props) => props.marginRight};
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  cursor: pointer;
  color: ${(props) => props.color};
  background: ${(props) =>
    props.background || props.selected};
`;
