import React, { Component } from 'react';
import styled from 'styled-components';
import { Attributes } from '../styledComponents/components';
import {
  Box,
  Div,
  UpgradedMinus,
  UpgradedPlus,
} from '../styledComponents/components';
import { connect } from 'react-redux';
import { getCurrentCurrency } from '../../utils/getCurrentCurrency';
import { ReactComponent as Left } from '../../assets/left.svg';
import { ReactComponent as Right } from '../../assets/right.svg';

class CartPageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  reduceIndex(number) {
    if (this.state.index === 0) {
      // return 0 if the last index is reached
      return this.setState({
        ...this.state,
        index: 0,
      });
    }
    return this.setState({
      ...this.state,
      index: this.state.index - number,
    });
  }
  increaseIndex(number, length) {
    if (this.state.index === length - 1) {
      // return the final index if reached
      return this.setState({
        ...this.state,
        index: this.state.index,
      });
    }
    // update the index by the number
    return this.setState({
      ...this.state,
      index: this.state.index + number,
    });
  }
  render() {
    const {
      name,
      selectedAttributes,
      brand,
      image,
      attributes,
      prices,
      quantity,
      addItem,
      removeItem,
    } = this.props;
    return (
      <Container>
        {' '}
        <div>
          <Details>
            <h1>{brand}</h1>
            <p>{name}</p>
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
                                  height="32px"
                                  width="32px"
                                  marginRight="0px"></Box>
                              </Div>
                            ) : (
                              <Box
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
          <div className="inner">
            <CartPageQuantityControl>
              <UpgradedMinus
                height="45px"
                width="45px"
                onClick={() => removeItem()}
              />
              <Quantity>
                <h3>{quantity}</h3>
              </Quantity>
              <UpgradedPlus
                height="45px"
                width="45px"
                onClick={() => addItem()}
              />
            </CartPageQuantityControl>
            <div>
              <SliderImage
                src={image[this.state.index]}
                alt="slidercartimage"
              />
            </div>
            <PictureChanger>
              <div>
                <Right
                  onClick={() =>
                    this.reduceIndex(1)
                  }
                />
              </div>
              <div className="left">
                <Left
                  onClick={() =>
                    this.increaseIndex(
                      1,
                      image.length
                    )
                  }
                />
              </div>
            </PictureChanger>
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
export default connect(MapStateToProps)(
  CartPageItem
);

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .inner {
    display: flex;
  }
`;

const PictureChanger = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  width: 141px;
  height: 185px;
  margin-left: 69px;
  padding-bottom: 16px;
  position: absolute;
  div {
    cursor: pointer;
  }
  .left {
    margin-right: 16px;
    margin-left: 8px;
  }
`;

const Details = styled.div`
  margin-bottom: 25px;
  h1 {
    font-family: Raleway;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0px;
    margin-bottom: 16px;
  }
  p {
    font-family: Raleway;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    margin-bottom: 20px;
  }
  h3 {
    font-family: Raleway;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const SliderImage = styled.img`
  width: 141px;
  height: 185px;
`;

const CartPageQuantityControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;
`;

const Quantity = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
