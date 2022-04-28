import { Component } from 'react';
import styled from 'styled-components';
import { getCurrentCurrency } from '../../utils/getCurrentCurrency';
import { connect } from 'react-redux';

import {
  Box,
  UpgradedMinus,
  UpgradedPlus,
  Div,
  Attributes,
} from '../styledComponents/components';
class CartItem extends Component {
  render() {
    const {
      name,
      brand,
      image,
      attributes,
      prices,
      selectedAttributes,
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
          <Attributes
            style={{
              display: 'flex',
            }}>
            {attributes.map((attr, index) => {
              return (
                <div
                  key={index}
                  className="attribute-selection">
                  <h3>{attr.name}:</h3>

                  <div className="box-container">
                    {attr.items.map(
                      (attribute, index) => {
                        return (
                          <div key={index}>
                            {attr.type ===
                            'swatch' ? (
                              <Div
                                height="20px"
                                width="20px"
                                $highlight={
                                  selectedAttributes[
                                    attr.name
                                  ] ===
                                  attribute.value
                                    ? true
                                    : false
                                }>
                                <Box
                                  border="none"
                                  key={index}
                                  background={
                                    attribute.value
                                  }
                                  height="16px"
                                  width="16px"
                                  marginRight="0px"></Box>
                              </Div>
                            ) : (
                              <Box
                                height="24px"
                                width="max-width"
                                minWidth="24px"
                                fontSize="14px"
                                key={index}
                                $selected={
                                  selectedAttributes[
                                    attr.name
                                  ] ===
                                  attribute.value
                                    ? true
                                    : false
                                }>
                                {attribute.value}
                              </Box>
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </Attributes>
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
                <UpgradedPlus
                  onClick={() => addItem()}
                />
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
                <UpgradedMinus
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
