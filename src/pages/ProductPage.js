import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addItem } from '../redux/reducers/cart/cart.actions';
import { getCurrentCurrency } from '../utils/getCurrentCurrency';
class ProductPage extends Component {
  constructor(props) {
    super(props);
    const { products } =
      this.props.productItems.category;
    const productId = this.props.match.params.id;
    const productData = products.filter(
      (product) => product.id === productId
    );

    this.state = {
      productData: productData,
      index: 0,
      selectedAttributes: {},
    };
  }

  render() {
    // productData
    const productData = this.state.productData[0];
    const { addItemToCart } = this.props;
    console.log(this.state.selectedAttributes);
    return (
      <Container>
        <Section marginRight={'20px'} width={''}>
          {productData.gallery.map(
            (item, index) => {
              return (
                <SelectImage
                  key={index}
                  onClick={() =>
                    this.setState({
                      ...this.state,
                      index: index,
                    })
                  }>
                  <img
                    src={item}
                    className="image"
                    alt="product"
                  />
                </SelectImage>
              );
            }
          )}
        </Section>
        <Section
          marginRight={'100px'}
          width={'610px'}
          background="#fff">
          <Image
            src={
              productData.gallery[
                this.state.index
              ]
            }
          />
        </Section>
        <Section
          marginRight={'20px'}
          width={'292px'}>
          <div className="productName">
            <h2>{productData.brand}</h2>
            <p>{productData.name}</p>
          </div>
          {productData.attributes.map(
            (attr, index) => {
              return (
                <div
                  key={index}
                  className="attribute-selection">
                  <h3>{attr.name}</h3>

                  <div className="box-container">
                    {attr.items.map(
                      (attribute, index) => {
                        return (
                          <>
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
                          </>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            }
          )}

          <div className="price">
            <h3>PRICE:</h3>

            <h4>
              {getCurrentCurrency(
                productData.prices,
                this.props.currentCurrency
              )}
            </h4>
          </div>
          <Button
            color="#ffffff"
            background="#5ECE7B"
            width="292px"
            height="52px"
            onClick={() =>
              addItemToCart({
                ...productData,
                selectedAttributes:
                  this.state.selectedAttributes,
              })
            }>
            ADD TO CART
          </Button>
          <div className="description">
            <p>
              Find stunning women's cocktail
              dresses and party dresses. Stand out
              in lace and metallic cocktail
              dresses and party dresses from all
              your favorite brands.
            </p>
          </div>
        </Section>
      </Container>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    productItems: state.inventory.catalog,
    currentCurrency:
      state.currency.currentCurrency,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) =>
      dispatch(addItem(item)),
  };
};
export default withRouter(
  connect(
    MapStateToProps,
    MapDispatchToProps
  )(ProductPage)
);

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  margin: 100px 0 0 0;
  padding: 20px;
  justify-content: center;
`;

const Section = styled.div`
  background-color:${(props) => props.background};
  height: 32em;
  width: ${(props) => props.width || '200px'};
  margin-right: ${(props) => props.marginRight};
  
  .productName {
    margin-bottom: 43px;
  }
  .productName > h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    margin-bottom:16px;
  }
  .productName > p {
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
  }
  .attribute-selection {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    .box-container {
      display: flex;

      width: 280px;
    }
    h3 {
      font-family: 'Roboto Condensed', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }
  }
  .price {
    margin-bottom: 20px;
    h3 {
      font-family: 'Roboto Condensed', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }
    h4{
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 18px;
      height: 46px;
      display flex;
      align-items:center;
    }
  }

  .description {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 159.96%;
  }
`;

const Box = styled.div`
  border: ${(props) =>
    props.border || '1px solid'};
  height: ${(props) => props.height || '45px'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '63px'};
  margin-right: ${(props) =>
    props.marginRight || '10px'};
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: ${(props) =>
    props.$selected ? '#FFFFFF' : '#000000'};
  background: ${(props) =>
    props.$selected
      ? '#000000'
      : props.background};
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0px ${(props) => props.margin || '0'}px
    40px 0px;
  border: ${(props) =>
    props.background
      ? '1px solid transparent'
      : '1px solid #1D1F22'};
  background-color: ${(props) =>
    props.background};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  /* identical to box height, or 19px */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

const SelectImage = styled.div`
  cursor: pointer;
  width: 176.65px;
  height: 87.61px;
  margin: 0px 0px 32px 0px;

  .image {
    width: 176.65px;
    height: 87.61px;
    object-fit: contain;
  }
`;

const Image = styled.img`
  width: 610px;
  object-fit: contain;
  height: 32em;
`;

const Div = styled.div`
  border: ${(props) =>
    props.$highlight
      ? '1px solid #5ECE7B'
      : '1px solid transparent'};
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
`;
