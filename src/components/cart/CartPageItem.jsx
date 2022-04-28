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
      selectedAttributes:
        this.props.selectedAttributes,
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
        <div style={{}}>
          <div
            style={{
              marginBottom: '25px',
            }}>
            <p
              style={{
                fontFamily: 'Raleway',
                fontSize: '30px',
                fontWeight: '700',
                letterSpacing: '0px',

                marginBottom: '16px',
              }}>
              {brand}
            </p>
            <p
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '30px',
                lineHeight: '27px',
                marginBottom: '20px',
              }}>
              {name}
            </p>
            <h3
              style={{
                fontFamily: 'Raleway',
                fontSize: '24px',
                fontWeight: '700px',
                lineHeight: '24px',

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
                  <h3
                    style={{
                      fontFamily:
                        'Roboto Condensed',
                      fontZize: '18px',
                      fontWeight: '700',
                      lineHeight: '18px',
                      letterSpacing: '0em',
                    }}>
                    {attr.name}:
                  </h3>

                  <div className="box-container">
                    {attr.items.map(
                      (attribute, index) => {
                        return (
                          <div key={index}>
                            {attr.type ===
                            'swatch' ? (
                              <Div
                                $highlight={
                                  this.state
                                    .selectedAttributes[
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
                                  marginRight="0px"
                                  onClick={() => {
                                    this.setState(
                                      {
                                        ...this
                                          .state,
                                        selectedAttributes:
                                          {
                                            ...this
                                              .state
                                              .selectedAttributes,

                                            [attr.name]:
                                              attribute.value,
                                          },
                                      }
                                    );
                                  }}></Box>
                              </Div>
                            ) : (
                              <Box
                                onClick={() =>
                                  this.setState({
                                    ...this.state,
                                    selectedAttributes:
                                      {
                                        ...this
                                          .state
                                          .selectedAttributes,

                                        [attr.name]:
                                          attribute.value,
                                      },
                                  })
                                }
                                key={index}
                                $selected={
                                  this.state
                                    .selectedAttributes[
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
                marginRight: '24px',
              }}>
              <UpgradedMinus
                height="45px"
                width="45px"
                onClick={() => removeItem()}
              />
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
              <UpgradedPlus
                height="45px"
                width="45px"
                onClick={() => addItem()}
              />
            </div>
            <div>
              <img
                style={{
                  width: '141px',
                  height: '185px',
                }}
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
