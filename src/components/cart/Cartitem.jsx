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
        <div>
          <Details>
            <p className="cartBrand">{brand}</p>
            <p className="cartBrand">{name}</p>
            <h3>
              {getCurrentCurrency(
                prices,
                this.props.currentCurrency
              )}
            </h3>
          </Details>
          <Attributes>
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
          <div className="image-container">
            <QuantityControl>
              <div>
                <UpgradedPlus
                  onClick={() => addItem()}
                />
              </div>
              <div className="quantity">
                <h3>{quantity}</h3>
              </div>
              <div>
                <UpgradedMinus
                  onClick={() => removeItem()}
                />
              </div>
            </QuantityControl>
            <div>
              <CartImage
                src={image}
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
  .image-container {
    display: flex;
  }
`;

const Details = styled.div`
  margin-bottom: 0.5rem;
  .cartBrand {
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 300;
    lineheight: 26px;
    letter-spacing: 0px;
    text-align: left;
    width: 136px;
    margin-bottom: 5px;
  }
  h3 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;
  .quantity {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      font-family: Raleway;
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0em;
    }
  }
`;

const CartImage = styled.img`
  width: 6.6rem;
  height: 8.9rem;
  object-fit: contain;
`;
